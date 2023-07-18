/* [문제] 문자 찾기
한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성하세요.
문자열의 길이는 100을 넘지 않습니다.

▣ 입력설명
첫 줄에 문자열이 주어지고, 두 번째 줄에 문자가 주어진다.

▣ 출력설명
첫 줄에 해당 문자의 개수를 출력한다.

▣ 입력예제 1 
COMPUTERPROGRAMMING
R

▣ 출력예제 1 
3
*/ 

function solution(str, char) {
  return [...str].filter(x => x === char).length;
}

console.log(solution("COMPUTERPROGRAMMING", "R"));


/* [풀이]
  주어진 문자열의 문자를 배열에 담음
  filter를 활용하여 특정 문자과 같은 값을 가진 요소들의 배열을 출력
  해당 배열의 length 값 리턴
*/

/* [강의 풀이 1]
  function solution(s, t) {
    let answer = 0;
    
    for (let x of s) {
      if (x === t) answer++;
    }

    return answer;
  };
*/

/* [강의 풀이 2]
  * 특정 문자로 구분지어 배열로 반환 후 해당 배열의 길이에서 -1
  * 특정 문자가 문자열 끝에 있는 경우도 구분지은 배열에 마지막 요소가 빈문자열로 들어가기 때문에 사용 가능
  * 
  function solution(s, t) {
    let answer = s.split(t).length;
    return answer - 1;
  };
*/