/* [문제] 가운데 문자 출력
소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세 요. 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.

▣ 입력설명
첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.

▣ 출력설명
첫 줄에 가운데 문자를 출력합니다.

▣ 입력예제 1 
study

▣ 출력예제 1 
u

▣ 입력예제 2 
good

▣ 출력예제 2 
oo
*/ 

function solution(n) {
  let divideValue = Math.floor(n.length / 2);

  return n.length % 2 === 0 ? n[divideValue - 1] + n[divideValue] : n[divideValue];
}

console.log(solution("study"));
console.log(solution("good"));

/* [풀이]
  단어의 길이를 2로 나누어 소수점 올림 한 값이 중간 번째 단어의 순서임을 이용
  하지만 변수를 인덱스 번호로 활용할 것이기 때문에 소수점 버림 처리
  단어의 길이가 짝수일 경우 단어의 변수 인덱스 문자와 변수 - 1 인덱스 문자를 출력하고
  홀수 일 경우 변수 인덱스 문자만 출력
*/

/* [강의 풀이 1]
- substring(x, y) : 문자열의 x 인덱스 번째 부터 y 인덱스 번째 전까지 출력
  function solution(s) {
    let answer;
    let mid = Math.floor(s.length / 2);

    if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
    else answer = s.substring(mid - 1, mid + 1);

    return answer;
  }
*/

/* [강의 풀이 2]
- substr(x, y) : 문자열의 x 인덱스 번째부터 y개의 문자 출력
  function solution(s) {
    let answer;
    let mid = Math.floor(s.length / 2);

    if (s.length % 2 === 1) answer = s.substr(mid, 1);
    else answer = s.substring(mid - 1, 2);
    
    return answer;
  }
*/