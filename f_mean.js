const mean = (arr_m) => {
  return arr_m.reduce((sum, num) => sum + num, 0) / arr_m.length;
};

module.exports = { mean };
