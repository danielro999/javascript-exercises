const convertToCelsius = function(faren) {
  let ToCelsius = (faren-32)*5/9;
  return Math.round(ToCelsius * 10)/10
};

const convertToFahrenheit = function(celsius) {
let toFahren = celsius * 9/5 + 32
  return Math.round(toFahren * 10)/10


};
console.log(convertToCelsius(100))
console.log(convertToFahrenheit(37.8))
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
