function solution(board, moves) {
  var answer = 0;

  const stack = [];

  for (let m = 0; m < moves.length; m++) {
    for (let i = 0; i < board.length; i++) {
      let j = moves[m] - 1;
      let doll = board[i][j];

      if (doll !== 0) {
        if (stack[stack.length - 1] === doll) {
          stack.pop();
          answer += 2;
        } else stack.push(doll);
        board[i][j] = 0;
        break;
      }
    }
  }

  return answer;
}