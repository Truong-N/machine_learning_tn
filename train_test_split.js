const train_test_split = (X, y) => {
  let test_size = 0.2;
  test_size = Math.ceil(test_size * y.length);
  let testArray = [];
  do {
    testArray = [];
    for (let i = 0; i < test_size; i++) {
      testArray.push(Math.floor(Math.random() * y.length));
    }
    testArray = [...new Set(testArray)].sort();
  } while (testArray.length < 2);
  testArray = [2, 9];
  console.log('testArray: ', testArray);
  const X_test = [];
  const y_test = [];
  testArray.forEach((i) => {
    X_test.push(X[i]);
    y_test.push(y[i]);
  });
  const X_train = [];
  const y_train = [];
  for (let i = 0; i < X.length; i++) {
    if (!testArray.includes(i)) {
      X_train.push(X[i]);
      y_train.push(y[i]);
    }
  }
  console.log('train_test_split:');
  console.log('x_train:');
  console.log(X_train);
  console.log('y_train:');
  console.log(y_train);
  console.log('X_test:');
  console.log(X_test);
  console.log('y_test:');
  console.log(y_test);
  standardScaler(X_train, y_train, X_test, y_test);
};
