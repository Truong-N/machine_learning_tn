const random_uniform = (n1 = 0, n2 = 5, n_time = 250) => {
  const arr = [];
  for (let i = 0; i < n_time; i++) {
    arr.push(Math.floor(Math.random() * (n2 - n1 + 1)));
  }
  console.log(arr);
};
random_uniform();
