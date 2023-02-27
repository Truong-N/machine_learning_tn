let ages = [
  5, 31, 43, 48, 50, 41, 7, 11, 15, 39, 80, 82, 32, 2, 8, 6, 25, 36, 27, 61, 31,
];
// ages = ages.map((item) => Number(item)).sort();
// console.log(ages);
const percentile = 75;
const age_percentile = Math.floor((percentile * ages.length) / 100);
console.log(age_percentile);
ages.sort((a, b) => a - b);
console.log(ages);
console.log(ages[age_percentile]);
