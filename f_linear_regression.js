const linear_regression = (x, y) => {
  // const x = [43, 21, 25, 42, 57, 59];
  // const y = [99, 65, 79, 75, 87, 81];
  const sumX = x.reduce((sum, num) => sum + num, 0);
  const sumY = y.reduce((sum, num) => sum + num, 0);
  console.log('sumX: ', sumX);
  console.log('sumY: ', sumY);
  const xy = [];
  for (let i = 0; i < x.length; i++) {
    xy.push(x[i] * y[i]);
  }
  console.log('xy: ', xy);
  const xx = [];
  for (let i = 0; i < x.length; i++) {
    xx.push(x[i] * x[i]);
  }
  console.log('xx: ', xx);
  const yy = [];
  for (let i = 0; i < y.length; i++) {
    yy.push(y[i] * y[i]);
  }
  console.log('yy: ', yy);
  const sumXY = xy.reduce((sum, num) => sum + num, 0);
  console.log('sumXY: ', sumXY);
  const sumXX = xx.reduce((sum, num) => sum + num, 0);
  console.log('sumXX: ', sumXX);
  const sumYY = yy.reduce((sum, num) => sum + num, 0);
  console.log('sumYY: ', sumYY);
  const a = (sumY * sumXX - sumX * sumXY) / (x.length * sumXX - sumX * sumX);
  console.log('a: ', a);
  const b = (x.length * sumXY - sumX * sumY) / (x.length * sumXX - sumX * sumX);
  console.log('b: ', b);
  const r =
    (x.length * sumXY - sumX * sumY) /
    Math.sqrt(
      (x.length * sumXX - sumX * sumX) * (x.lenght * sumYY - sumY * sumY)
    );
  console.log('r: ', r);
  return { a: a, b: b, r: r };
};
// const x = [43, 21, 25, 42, 57, 59];
// const y = [99, 65, 79, 75, 87, 81];
// linear_regression(x, y);
module.exports = { linear_regression };
