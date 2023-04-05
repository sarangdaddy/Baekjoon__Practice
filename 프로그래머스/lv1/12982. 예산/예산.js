function solution(d, budget) {
  let answer = 0;
  let sum = 0;
  const sort = d.sort((a, b) => a - b);

  for (let i = 0; i < sort.length; i++) {
    if (sum + sort[i] <= budget) {
      sum += sort[i];
      answer++;
    }
  }

  return answer;
}