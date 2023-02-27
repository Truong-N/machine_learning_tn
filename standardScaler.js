const standardScaler_fit_transform = (train, test, col) => {
  let arr_train = train.map((item) => item[col]);
  let arr_test = test.map((item) => item[col]);

  //   const mean = arr_train.reduce((sum, num) => sum + num, 0) / arr_train.length;
  const cmean = mean(arr_train);
  //   const variance =
  //     arr_train
  //       .map((item) => Math.pow(item - cmean, 2))
  //       .reduce((sum, num) => sum + num, 0) / arr_train.length;
  const cvariance = variance(arr_train, cmean);
  const deviation = Math.sqrt(cvariance);
  arr_train = arr_train.map((item) => (item - cmean) / deviation);
  arr_test = arr_test.map((item) => (item - cmean) / deviation);
  console.log('variance: ', cvariance);
  console.log('deviation: ', deviation);
  console.log('mean: ', cmean);
  for (let i = 0; i < train.length; i++) {
    train[i][col] = arr_train[i];
  }
  for (let i = 0; i < test.length; i++) {
    test[i][col] = arr_test[i];
  }
  //   return mean, deviation
};

const standardScaler = (X_train, y_train, X_test, y_test) => {
  standardScaler_fit_transform(X_train, X_test, 3);

  standardScaler_fit_transform(X_train, X_test, 4);

  console.log('standardScaler.fit_transform');
  console.log('X_train:');
  console.log(X_train);
  console.log('y_train:');
  console.log(y_train);
  console.log('X_test:');
  console.log(X_test);
  console.log('y_test:');
  console.log(y_test);
};
