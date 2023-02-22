const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));

const N = input[1];

const answer = N.map(Number).reduce(
  (acc, cur) => {
    if (cur < acc[0]) {
      acc[0] = cur;
    } else if (cur > acc[1]) {
      acc[1] = cur;
    }
    return acc;
  },
  [N[0], N[0]]
);

console.log(answer.join(" "));