const userInput = function () {
  var fs = require("fs");
  var input = fs.readFileSync("/dev/stdin").toString().split(" ");
  var a = parseInt(input[0]);
  var b = parseInt(input[1]);
  getCountBuy(a, b);
};

const getCountBuy = function (N, K) {
  let btlCount = N;
  const canMove = K;

  let originBottle = btlCount;
  let bin2Str = btlCount.toString(2);
  let bitCount = bin2Str.match(/1/g).length;

  while (bitCount > canMove) {
    btlCount += parseInt(bin2Str.substring(bin2Str.lastIndexOf("1")), 2);
    bin2Str = btlCount.toString(2);
    bitCount = bin2Str.match(/1/g).length;
  }
  console.log(btlCount - originBottle);
};

userInput();
