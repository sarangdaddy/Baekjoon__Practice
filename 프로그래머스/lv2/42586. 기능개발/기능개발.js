function solution(progresses, speeds) {
  var answer = [];

  const endCountArray = [];

  for (let i = 0; i < progresses.length; i++) {
    const endCount = Math.ceil((100 - progresses[i]) / speeds[i]);
    endCountArray.push(endCount);
  }

  while (endCountArray.length > 0) {
    const minusCount = endCountArray[0];
    for (let i = 0; i < endCountArray.length; i++) {
      endCountArray[i] -= minusCount;
    }

    if (endCountArray[0] === 0) {
      let releaseCount = 0;
      while (endCountArray[1] <= 0) {
        releaseCount++;
        endCountArray.shift();
      }
      releaseCount++;
      answer.push(releaseCount);
      endCountArray.shift();
    }
  }

  return answer;
}