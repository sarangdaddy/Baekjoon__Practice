function solution(today, terms, privacies) {
  // 총 일수로 계산하는 함수
  const toNumberDay = (dates) => {
    return dates.reduce((acc, cur, index) => {
      switch (index) {
        case 0:
          return acc + Number(cur) * 336;
        case 1:
          return acc + (Number(cur) - 1) * 28;
        case 2:
          return acc + Number(cur);
        default:
          return acc;
      }
    }, 0);
  };

  // terms 객체로 만들기 (달값 -> 일값으로 변경)
  const termsToObject = terms.reduce((acc, cur) => {
    const [key, value] = cur.split(" ");
    acc[key] = Number(value * 28);
    return acc;
  }, {});

  //개인정보 보관 마감 기간 총 일수로 변경
  const priToNumberDay = privacies.reduce((acc, cur) => {
    const [date, term] = cur.split(" ");
    const termDays = termsToObject[term];
    const totalDays = toNumberDay(date.split(".")) + termDays;
    acc.push(totalDays);
    return acc;
  }, []);

  // Today 총값
  const todayToNumberDay = toNumberDay(today.split("."));

  // Today 총값 보다 작거나 같으면 (마감 지난거나 마감일) 파기
  const answer = priToNumberDay.reduce((acc, cur, index) => {
    if (cur <= todayToNumberDay) acc.push(index + 1);
    return acc;
  }, []);

  return answer;
}
