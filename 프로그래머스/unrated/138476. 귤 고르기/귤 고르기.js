function solution(k, tangerine) {
  let answer = 0;

  const whatKind = new Map();

  // 같은 크기의 귤의 개수를 계산한다.
  tangerine.forEach((item) => {
    whatKind.set(item, whatKind.has(item) ? whatKind.get(item) + 1 : 1);
  });

  // 개수가 가장 많은 종류 부터 포장한다.
  const numOfPackage = [...whatKind].sort((a, b) => b[1] - a[1]);

  // 포장 개수 k가 0보다 크면 계속 포장한다.
  numOfPackage.forEach((kindAndNumber) => {
    if (k > 0) {
      k -= kindAndNumber[1];
      answer++;
    }
  });

  return answer;
}

console.log(solution(6, [1, 1, 1, 1, 1, 2, 2]));