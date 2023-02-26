const columnTransformer_OneHotEncoder = (X, y) => {
  const XCol0Unique = [...new Set(X.map((item) => item[0]))];
  XCol0Unique.sort();
  const XCol0UniqueEquivalence = [];

  for (let r = 0; r < XCol0Unique.length; r++) {
    const row = [];
    for (let c = 0; c < XCol0Unique.length; c++) {
      row.push(0);
    }
    XCol0UniqueEquivalence.push(row);
  }
  for (let i = 0; i < XCol0Unique.length; i++) {
    XCol0UniqueEquivalence[i][i] = 1;
  }
  const X1 = [];
  for (let i = 0; i < X.length; i++) {
    // console.log(X[i][0]);
    const row = [];
    const ind = XCol0Unique.findIndex((item) => item === X[i][0]);
    // console.log(XCol0UniqueEquivalence[ind]);
    for (let c = 0; c < XCol0Unique.length; c++) {
      row.push(XCol0UniqueEquivalence[ind][c]);
    }
    for (let c = 1; c < X[0].length; c++) {
      row.push(X[i][c]);
    }
    // console.log(row);
    X1.push(row);
  }
  // console.log(X1);
  X = X1;
  console.log('columnTransformer:');
  console.log('X:');
  console.log(X);
  labelEncoder(X, y);
};
