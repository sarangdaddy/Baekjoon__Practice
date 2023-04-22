function solution(n, arr1, arr2) {
  let answer = [];

  const binArr1 = arr1.map((number) => {
    let bin = number.toString(2).padStart(n, 0);
    return bin;
  });

  const binArr2 = arr2.map((number) => {
    let bin = number.toString(2).padStart(n, 0);
    return bin;
  });

  for (let i = 0; i < binArr1.length; i++) {
    let str = "";
    for (let j = 0; j < binArr1.length; j++) {
      if (Number(binArr1[i][j]) === 0 && Number(binArr2[i][j]) === 0) {
        str += " ";
      } else {
        str += "#";
      }
    }
    answer.push(str);
  }

  return answer;
}