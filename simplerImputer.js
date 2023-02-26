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

const simpleImputer = (X, y) => {
  X = fixCol(1, X);
  X = fixCol(2, X);
  console.log('simpleImputer:');
  console.log('X:');
  console.log(X);
  columnTransformer_OneHotEncoder(X, y);
};
