function solution(s) {
  var answer = [];
  const wordArray = s.split(" ");

  for (let i = 0; i < wordArray.length; i++) {
    let word = wordArray[i].split("");
    const changeWords = [];
    word.map((v, i) => {
      if (i === 0 || i % 2 === 0) {
        changeWords.push(v.toUpperCase());
      } else changeWords.push(v.toLowerCase());
    });
    answer.push(changeWords.join(""));
  }

  return answer.join(" ");
}