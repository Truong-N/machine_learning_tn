const fit_transform = (arr) => {
  return arr.map((item) => (item === 'Yes' ? 1 : 0));
};

const standardScaler_fit_transform = (array, col) => {
  let arr = array.map((item) => item[col]);
  const mean = arr.reduce((sum, num) => sum + num, 0) / arr.length;
  const variance =
    arr
      .map((item) => Math.pow(item - mean, 2))
      .reduce((sum, num) => sum + num, 0) / arr.length;
  const deviation = Math.sqrt(variance);
  arr = arr.map((item) => (item - mean) / deviation);
  console.log(variance);
  console.log(deviation);
  console.log('mean: ', mean);
  for (let i = 0; i < array.length; i++) {
    array[i][col] = arr[i];
  }
};

const fixCol = (col, arr) => {
  const col1 = arr.map((item) => item[col]);
  const col1a = col1.filter((item) => item.length > 0);
  const average =
    col1a.map((item) => Number(item)).reduce((sum, i) => sum + i, 0) /
    col1a.length;
  const col1b = col1.map((item) => {
    if (item.length === 0) {
      return average;
    }
    return Number(item);
  });
  //   for (let r = 0; r < arr.length; r++) {
  //     arr[r][col] = col1b[r];
  //   }
  arr.map((item, i) => [...item, (item[col] = col1b[i])]);
  //   console.log(col1b);
  return arr;
};

const print = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    console.log(
      `X:${a[i][0]}, ${a[i][1]}, ${a[i][2]}, ${a[i][3]}, ${a[i][4]} y:${b[i]}`
    );
  }
};

const train_test_split = (XArray, yArray, test_size) => {
  test_size = Math.ceil(test_size * yArray.length);
  let testArray = [];
  do {
    testArray = [];
    for (let i = 0; i < test_size; i++) {
      testArray.push(Math.floor(Math.random() * yArray.length));
    }
    testArray = [...new Set(testArray)].sort();
  } while (testArray.length < 2);
  console.log('testArray: ', testArray);
  const X_test = [];
  const y_test = [];
  testArray.forEach((i) => {
    X_test.push(XArray[i]);
    y_test.push(yArray[i]);
  });
  const X_train = [];
  const y_train = [];
  for (let i = 0; i < XArray.length; i++) {
    if (!testArray.includes(i)) {
      X_train.push(XArray[i]);
      y_train.push(yArray[i]);
    }
  }
  return { X_train, y_train, X_test, y_test };
};

const fs = require('fs');

try {
  const data = fs.readFileSync('Data.csv', 'utf8');
  const dataArray = data.split('\n');
  const data2d = dataArray.map((item) => item.trim().split(','));
  // remove heading
  data2d.shift();
  // fix col1
  //   const data2d_ = fixCol(1, data2d);
  //   const data2d__ = fixCol(2, data2d_);

  // split data2d to a and b
  let X = data2d.map((item) => [item[0], item[1], item[2]]);
  let y = data2d.map((item) => item[3]);

  // convert data in column 0 to number
  const XCol0Unique = [...new Set(X.map((item) => item[0]))];
  console.log(XCol0Unique);
  for (let r = 0; r < X.length; r++) {
    let col0 = X[r].shift();

    XCol0Unique.forEach((XCol0, i) => {
      if (XCol0 === col0) {
        switch (i) {
          case 0:
            col0 = [1, 0, 0];
            break;
          case 1:
            col0 = [0, 1, 0];
            break;
          case 2:
            col0 = [0, 0, 1];
        }
      }
    });

    X[r] = [...col0, ...X[r]];
  }
  X = fixCol(3, X);
  X = fixCol(4, X);

  //   for (let i = 0; i < Y.length; i++) {
  //     Y[i] = Y[i] === 'Yes' ? 1 : 0;
  //   }
  y = fit_transform(y);
  print(X, y);

  const test_size = 0.2;
  const { X_train, y_train, X_test, y_test } = train_test_split(
    X,
    y,
    test_size
  );
  standardScaler_fit_transform(X_train, 3);
  standardScaler_fit_transform(X_train, 4);
  console.log('X_train:');
  console.log(X_train);
  console.log('y_train:');
  console.log(y_train);
  console.log('X_test:');
  console.log(X_test);
  console.log('y_test:');
  console.log(y_test);
} catch (err) {
  console.error(err);
}
