const pandas_iloc = (dataset) => {
  let X = dataset.map((item) => [item[0], item[1], item[2]]);
  let y = dataset.map((item) => item[3]);
  console.log('pandas_iloc:');
  console.log('X: ');
  console.log(X);
  console.log('y: ');
  console.log(y);
  simpleImputer(X, y);
};
