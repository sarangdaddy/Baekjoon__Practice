function solution(s) {
  let answer = s.length;
  let cnt = 1;
  let zipString = "";

  for (let i = 1; i <= Math.ceil(s.length / 2); i++) {
    zipString = "";

    for (let j = 0; j < s.length; j += i) {
      if (s.substr(j, i) === s.substr(j + i, i)) {
        cnt++;
      } else if (cnt === 1) {
        zipString += s.substr(j, i);
        cnt = 1;
      } else {
        zipString += cnt + s.substr(j, i);
        cnt = 1;
      }
    }
    answer = Math.min(answer, zipString.length);
  }
  return answer;
}