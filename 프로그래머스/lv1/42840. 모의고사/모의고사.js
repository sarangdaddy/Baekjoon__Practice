function solution(answers) {
  var answer = [];
  const score = [];

  const student1 = [1, 2, 3, 4, 5];
  const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const countAnswer = (studentAnswer) => {
    let checkAnswer = [...answers];
    let count = 0;

    while (checkAnswer.length !== 0) {
      const checkRange = checkAnswer.slice(0, studentAnswer.length);

      const isSameValue = (checkRange, studentAnswer) =>
        checkRange.filter((v, i) => v === studentAnswer[i]);

      const countArray = isSameValue(checkRange, studentAnswer);
      count += countArray.length;
      checkAnswer.splice(0, studentAnswer.length);
    }
    return count;
  };

  score.push(countAnswer(student1));
  score.push(countAnswer(student2));
  score.push(countAnswer(student3));

  score.forEach((v, i) => {
    let maxValue = Math.max(...score);
    if (v === maxValue) {
      answer.push(i + 1);
    }
  });

  return answer;
}