function solution(s) {
  var answer = "";
  const array = s.split(" ").sort((a, b) => a - b);
  return (answer = `${array[0]} ${array[array.length - 1]}`);
}
