function solution(strings, n) {
  const answer = strings.sort((a, b) => {
    if (a[n] < b[n]) return -1;
    else if (a[n] > b[n]) return 1;
    else {
      // n번째 문자가 같은 경우 사전순으로 정렬
      if (a < b) return -1;
      else if (a > b) return 1;
      else return 0;
    }
  });

  return answer;
}
