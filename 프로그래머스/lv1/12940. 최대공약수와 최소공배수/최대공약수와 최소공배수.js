function solution(n, m) {
  var answer = [];

  if (n > m) {
    A = n;
    B = m;
  } else {
    A = m;
    B = n;
  }

  let remainder = 0;

  while (A % B != 0) {
    remainder = A % B;
    A = B;
    B = remainder;
  }

  answer.push(B);
  answer.push((n * m) / B);

  return answer;
}