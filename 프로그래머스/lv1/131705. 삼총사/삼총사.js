function solution(number) {
  let answer = 0;
  let pointOne = 0;
  let pointTwo = 1;
  let pointThree = 2;

  for (let i = pointOne; i < number.length - 2; i++) {
    for (let j = pointTwo; j < number.length - 1; j++) {
      for (let k = pointThree; k < number.length; k++) {
        let sum = number[i] + number[j] + number[k];
        if (sum === 0) {
          answer++;
        }
        pointThree++;
      }
      pointTwo++;
      pointThree = pointTwo + 1;
    }
    pointOne++;
    pointTwo = pointOne + 1;
    pointThree = pointTwo + 1;
  }

  return answer;
}