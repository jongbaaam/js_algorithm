/* [문제] 세 수 중 최솟값

  100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하세요.(정렬을 사용하면 안됩니다)
  ▣ 입력설명
  첫 번째 줄에 100이하의 세 자연수가 입력된다.

  ▣ 출력설명
  첫 번째 줄에 가장 작은 수를 출력한다.

  ▣ 입력예제 1 
  6 5 11

  ▣ 출력예제 1 
  5
*/

function solution(a, b, c) {
  let min = a > b ? (
    b > c ? c : b
  ) : (
    a > c ? c : a
  );
  
  return console.log(min);
};
  
solution(6, 6, 6);


/* [풀이]
  정렬을 사용 할 수 없기 때문에 삼항 연산자를 사용하여 직접 비교를 통해 최솟값을 출력함.
*/

/* [강의 풀이] 
  function solution(a, b, c){
    let answer;
    if(a < b) answer = a;
    else answer = b;
    if(c <answer) answer = c; 
    return answer;
  }

  console.log(solution(2, 5, 1));
*/