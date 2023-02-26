const labelEncoder = (X, y) => {
  y = y.map((item) => (item === 'Yes' ? 1 : 0));
  console.log('LabelEncoder:');
  console.log('y:');
  console.log(y);
  train_test_split(X, y);
};
