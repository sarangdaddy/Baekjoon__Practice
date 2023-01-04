const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const calculateR = function () {
  let answer = 0;
  const colorObj = {
    black: [0, 1],
    brown: [1, 10],
    red: [2, 100],
    orange: [3, 1000],
    yellow: [4, 10000],
    green: [5, 100000],
    blue: [6, 1000000],
    violet: [7, 10000000],
    grey: [8, 100000000],
    white: [9, 1000000000],
  };

  const firstColor = colorObj[input[0]][0] + "";
  const secondColor = colorObj[input[1]][0] + "";
  const thirdColor = colorObj[input[2]][1];

  answer = Number(firstColor + secondColor) * thirdColor;
  console.log(answer);
};

calculateR();