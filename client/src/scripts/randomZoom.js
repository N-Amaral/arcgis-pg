export function randomize() {
  const values = {
    latitude: Math.floor(Math.random() * 181),
    longitude: Math.floor(Math.random() * 361),
  };
  return convertNumbers(values);
}

function convertNumbers(values) {
  const { latitude, longitude } = values;
  let newLat,
    newLong = 0;

  if (latitude < 90) {
    newLat = Math.abs(latitude) * -1;
  } else {
    newLat = Math.floor(latitude / 2);
  }

  if (longitude < 180) {
    newLong = Math.abs(longitude) * -1;
  } else {
    newLat = Math.floor(longitude / 2);
  }

  const newValues = {
    latitude: newLat,
    longitude: newLong,
  };

  return newValues;
}
