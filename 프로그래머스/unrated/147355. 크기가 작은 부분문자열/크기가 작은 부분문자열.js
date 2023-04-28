function solution(t, p) {
  let answer = 0;

  const length = p.length;

  for (let i = 0; i < t.length; i++) {
    if (i + length > t.length) continue;

    let strParts = t.slice(i, i + length);
    if (strParts <= p) {
      answer++;
    }
  }

  return answer;
}