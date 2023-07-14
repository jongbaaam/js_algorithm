/* [문제] A를 #으로
대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 번째 줄에 문자열이 입력된다.

▣ 출력설명
첫 번째 줄에 바뀐 단어를 출력한다.

▣ 입력예제 1 
BANANA

▣ 출력예제 1 
B#N#N#

*/ 

function solution(str) {
  let result = str.replaceAll("A", "#");

  return result;
}

solution("BANANA");

/* [풀이]
  str.replaceAll()을 활용하여 문자열 중 A를 모두 #으로 대체함 
*/

/* [강의 풀이 1]
  function solution(str) {
    let answer = "";

    for (let x of s) {
      if (x === "A") answer += "#";
      else answer += x;
    }

    return answer;
  }
*/

/* [강의 풀이 2]
// 문자열은 얕은 복사(주소 참조)가 되지 않고 값을 복사.
  function solution(str) {
    let answer = str;

    answer = str.replace(/A/g, '#');

    return answer;
  }
*/