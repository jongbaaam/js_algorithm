/* [문제] 중복 문자 제거
소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하세요.
제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.

▣ 입력설명
첫 줄에 문자열이 입력됩니다.

▣ 출력설명
첫 줄에 중복문자가 제거된 문자열을 출력합니다.

▣ 입력예제 1 
ksekkset

▣ 출력예제 1 
kset
*/ 

function solution(n) {
  return [...n].reduce((acc, cur) => {
    if (!acc.includes(cur)) {
      acc.push(cur);
    }

    return acc;
  }, []).join("");
}

console.log(solution("ksekkset"));

/* [풀이]
  reduce()로 새로운 배열을 만들어 문자열의 문자를 순회
  중복되지 않는 값이 들어간 배열을 생성 후 
  join()을 사용하여 문자열로 반환
*/

/* [강의 풀이]
function solution(s) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i] === i)) answer += s[i];
  }
}
*/