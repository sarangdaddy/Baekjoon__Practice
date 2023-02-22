const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));

const N = input[1].map(Number);

const min = Math.min.apply(null, N);
const max = Math.max.apply(null, N);

console.log(`${min} ${max}`);
