export function plateValidation(plateNumber, callback) {
  try {
    const v = plateNumber.replace(/\s+/g, '').toUpperCase();
    const regex = /^(0[1-9]|[1-7][0-9]|8[01])(([A-Z])(\d{4,5})|([A-Z]{2})(\d{3,4})|([A-Z]{3})(\d{2,3}))$/;
    if (v.match(regex) == null) {
      callback('Plaka formatı hatalı');
    } else {
      callback();
    }
  } catch (e) {
    console.error('plateValidation Error', e);
    callback('Plaka formatı hatalı');
  }
}