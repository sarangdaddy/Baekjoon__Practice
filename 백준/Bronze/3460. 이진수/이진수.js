const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n").map(Number);

const T = input[0];

for (let i = 1; i <= T; i++) {
  let n = input[i];
  let toBin = n.toString(2).split("").reverse();

  let answer = [];

  toBin.forEach((v, i) => {
    if (v === "1") answer.push(i);
  });

  console.log(answer.join(" "));
}
