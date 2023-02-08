function solution(price, money, count) {
  var answer = 0;
  let priceArray = [];

  for (let i = 1; i <= count; i++) priceArray.push(price * i);

  let total = priceArray.reduce((acc, v) => acc + v, 0);

  answer = total - money;

  return answer > 0 ? answer : 0;
}