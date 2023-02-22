const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(path).toString().trim().split(" ");

function answer(n, k) {
  let newSet = new Set();
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      newSet.add(i);
      newSet.add(n / i);
    }
  }

  if (newSet.size < k) {
    return 0;
  } else {
    return Array.from(newSet).sort((a, b) => a - b)[k - 1];
  }
}

console.log(answer(input[0], input[1]));