function solution(s) {
    var answer = s.toLowerCase().replace(/\b[a-z]/g, char => char.toUpperCase());
    return answer;
}