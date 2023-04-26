function solution(numbers) {
  const answer = new Set();

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (j > numbers.length) {
        continue;
      }
      let sum = numbers[i] + numbers[j];
      answer.add(sum);
    }
  }

  return [...answer].sort((a, b) => a - b);
}
