
function solution(sizes) {
  let answer = 0;
  let finalMax = Number.MIN_SAFE_INTEGER;
  let finalMin = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < sizes.length; i++) {
    let max = Math.max(sizes[i][0], sizes[i][1]);
    let min = Math.min(sizes[i][0], sizes[i][1]);
    finalMax = Math.max(finalMax, max);
    finalMin = Math.max(finalMin, min);
    answer = finalMax * finalMin;
  }

  return answer;
}