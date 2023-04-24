const obj = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function solution(s) {
  let answer = "";
  let str = "";
  let value = "";

  for (let i = 0; i < s.length; i++) {
    value = s[i];

    if (!isNaN(value)) {
      answer += value;
    } else {
      str += value;
      if (obj[str] !== undefined) {
        answer += obj[str];
        str = "";
      }
    }
  }

  return Number(answer);
}