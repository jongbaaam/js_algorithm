/* [문제] 최솟값 구하기

7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 번째 줄에 7개의 수가 주어진다.

▣ 출력설명
첫 번째 줄에 가장 작은 값을 출력한다.

▣ 입력예제 1
5 3 7 11 2 15 17

▣ 출력예제 1 
2
*/ 

function solution(...n) {
  return console.log(Math.min(...n));
}

solution(5, 3, 7, 11, 2, 15, 17);

/* [풀이]
  전개 연산자와 Math.min()를 활용하여 주어진 입력값의 최솟값을 구함
*/

/* [강의 풀이 1]
  let arr = [5, 3, 7, 11, 2, 15, 17];
  function solution(arr) {
    let answer, min = Number.MAX_SAFE_INTEGER; // 최솟값을 구할 때 안전한 최대 정수로 초기화 해주면 좋음

    for(let i = 0; i < arr.length; i++){
      if (arr[i] < min) min = arr[i];
    }

    answer = min;
    return answer;
  }
*/

/* [강의 풀이 2]
  let arr = [5, 3, 7, 11, 2, 15, 17];
  function solution(arr) {
    let answer = Math.min(...arr);
    return answer;
  }
*/

/* [강의 풀이 3]
  let arr = [5, 3, 7, 11, 2, 15, 17];
  function solution(arr) {
    let answer = Math.min.apply(null, arr);
    return answer;
  }
*/