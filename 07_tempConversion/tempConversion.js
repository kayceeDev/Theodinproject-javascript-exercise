const ftoc = function(f) {
// ([°F] − 32) × 5⁄9

celcius = Math.round(((f - 32) * (5/9)) * 10 ) / 10 
return celcius
};

const ctof = function(c) {
// [°C] × 9⁄5 + 32
fahrenheit = Math.round((c * (9/5) + 32) *10 ) /10
return fahrenheit
};

module.exports = {
  ftoc,
  ctof
};
