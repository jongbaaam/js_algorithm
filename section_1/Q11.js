/* [문제] 대문자 찾기
한 개의 문자열을 입력받아 핻아 문자열에 알파벳 대문자가 몇개가 있는지 알아내는 프로그램을 작성하세요.

▣ 입력설명
첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.

▣ 출력설명
첫 줄에 대문자의 개수를 출력한다.

▣ 입력예제 1 
KoreaTimeGood

▣ 출력예제 1 
3
*/ 

function solution(str) {
  return str.match(/[A-Z]/g).length;
}

console.log(solution("KoreaTimeGood"));

/* [풀이]
  JS의 정규식 메서드와 정규표현식을 활용
  - 주어진 문자열에 대문자(/[A-Z]/g)와 match(정규식과 일차하는 문자를 배열로 반환) 사용
  - 해당 배열의 길이 값 리턴
*/

/* [강의 풀이 1]
  function solution(s) {
    let answer = 0;

    for (let x of s) {
      if (x === x.toUpperCase()) answer ++;
    }

    return answer;
  }
*/

/* [강의 풀이 2]
  - 아스키 코드 활용
  - 대문자 : 65 ~ 90
  - 소문자 : 97 ~ 122

  function solution(s) {
    let answer = 0;

    for (let x of s) {
      let num = x.charCodeAt();
      if (num >= 65 && num <= 90) answer ++;
    }

    return answer;
  }
*/