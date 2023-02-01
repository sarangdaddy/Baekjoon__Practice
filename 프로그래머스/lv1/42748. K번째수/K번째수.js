function solution(array, commands) {
  var answer = [];

  for (let i = 0; i < commands.length; i++) {
    const commandsArray = commands[i];
    const firstArray = array
      .slice(commandsArray[0] - 1, commandsArray[1])
      .sort((a, b) => a - b);
    answer.push(firstArray[commandsArray[2] - 1]);
  }
  return answer;
}