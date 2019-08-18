const ftoc = function(temp) {
   return Math.round(((temp - 32) * (5/9)),1);
}

const ctof = function(temp) {
  return Math.round((temp * (5/9) + 32),1);
}

module.exports = {
  ftoc,
  ctof
}
