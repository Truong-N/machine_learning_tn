const variance = (arr_v, mean) => {
  return (
    arr_v
      .map((item) => Math.pow(item - mean, 2))
      .reduce((sum, num) => sum + num, 0) / arr_v.length
  );
};

module.exports = { variance };
