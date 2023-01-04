const userInput = function () {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().split("\n");

  for (let i = 1; i <= input[0]; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    const unitArr = selectLastComputer(a, b);
    console.log(unitArr);
  }
};

const selectLastComputer = function (a, b) {
  let answer = 0;
  const b2Cycle = [6, 2, 4, 8];
  const b3Cycle = [1, 3, 9, 7];
  const b4Cycle = [6, 4, 6, 4];
  const b7Cycle = [1, 7, 9, 3];
  const b8Cycle = [6, 8, 4, 2];
  const b9Cycle = [1, 9, 1, 9];

  switch (a % 10) {
    case 0:
      answer = 10;
      break;
    case 1:
      answer = 1;
      break;
    case 2:
      answer = b2Cycle[b % 4];
      break;
    case 3:
      answer = b3Cycle[b % 4];
      break;
    case 4:
      answer = b4Cycle[b % 4];
      break;
    case 5:
      answer = 5;
      break;
    case 6:
      answer = 6;
      break;
    case 7:
      answer = b7Cycle[b % 4];
      break;
    case 8:
      answer = b8Cycle[b % 4];
      break;
    case 9:
      answer = b9Cycle[b % 4];
      break;
  }
  return answer;
};

userInput();
