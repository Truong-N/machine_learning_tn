const fmean = require('./f_mean');
const fvariance = require('./f_variance');
const random_normal = (num, deviation, n_random) => {
  const arr = [];
  for (let i = 0; i < n_random; i++) {
    arr.push(Math.random() * (deviation * 2) + num - 1);
  }
  const cal_mean = fmean.mean(arr);
  const cal_variance = fvariance.variance(arr, cal_mean);
  const cal_deviation = Math.sqrt(cal_variance);
  console.log('mean: ', cal_mean);
  console.log('variace: ', cal_variance);
  console.log('deviation: ', cal_deviation);
  return arr;
};
console.log(random_normal(5, 1.5, 20));
