/* [문제] 대소문자 변환
대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로 변환하여
출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.

▣ 출력설명
첫 줄에 대문자는 소문자로, 소문자는 대문자로 변환된 문자열을 출력합니다.

▣ 입력예제 1
StuDY

▣ 출력예제 1 
sTUdy
*/ 

function solution(n) {
  let result = "";

  for (let str of n) {
    result += str === str.toUpperCase() ? str.toLowerCase() : str.toUpperCase();
  }

  return result;
}

solution("StuDY");

/* [풀이]
  주어진 문자열의 문자를 순회하며 해당 문자가 대문자면 소문자로 소문자면 대문자로 변환 후 리턴
*/

/* [강의 풀이]
let answer = "";

for (let x of s) {
  if ( x === x.toLowerCase()) answer += x.toUpperCase();
  else answer += x.toLowerCase();
}
*/