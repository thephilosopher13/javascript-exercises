const convertToCelsius = function(value) {
   let convertedValue = ((value - 32)*0.556);
   let roundedValue = Number(convertedValue.toFixed(1));
   return roundedValue
};

const convertToFahrenheit = function(value) {
  let convertedValue = ((value*1.8) + 32)
  let roundedValue = Number(convertedValue.toFixed(1))
  return roundedValue
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
