function solution(s) {
  let result = [];
  let object = {};

  [...s].forEach((string, index) => {
    if (object[string] != undefined) {
      result.push(index - object[string]);
      object[string] = index;
    } else {
      result.push(-1);
      object[string] = index;
    }
  });
    
  return result;
}