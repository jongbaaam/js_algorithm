/* [문제] 1부터 N까지 합 출력하기

자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 번째 줄에 20이하의 자연수 N이 입력된다..

▣ 출력설명
첫 번째 줄에 1부터 N까지의 합을 출력한다.

▣ 입력예제 1 
6

▣ 출력예제 1 
21

▣ 입력예제 2 
10

▣ 출력예제 2
55
*/ 

function solution(n) {
  let result = 0;

  for (; n > 0; n--) {
    result += n;
  }

  return console.log(result);
}

solution(10);

/* [풀이]
  for문을 사용하여 n을 기준으로 -1 씩 실행 후 
  해당 n을 result에 더 함
*/

/* [강의 풀이]
  function solution(n) {
    let answer = 0;

    for (let i = 1; i <= n; i++) {
      answer += i;
    }

    return answer;
  }
*/