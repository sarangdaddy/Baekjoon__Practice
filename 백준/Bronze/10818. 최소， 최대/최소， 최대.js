const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));

const N = input[1];

const min = Math.min(...N);
const max = Math.max(...N);

console.log(`${min} ${max}`);
