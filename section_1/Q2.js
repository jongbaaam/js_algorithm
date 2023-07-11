/* [문제] 삼각형 판별하기
  
  길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.
  ▣ 입력설명
  첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.
  
  ▣ 출력설명
  첫 번째 줄에 “YES", "NO"를 출력한다.

  ▣ 입력예제 1
  6 7 11

  ▣ 출력예제 1 
  YES

  ▣ 입력예제 2
  13 33 17

  ▣ 출력예제 2
  NO

*/ 

function solution(a, b, c) {
  let sum = a + b + c;
  let max = a > b ? (
    a > c ? a : c
  ) : (
    b > c ? b : c
  );

  return console.log(sum - max > max ? "YES" : "NO")
};

solution(6, 7, 11);// YES
solution(13, 33, 17); // NO

/* [풀이]
  서로 다른 길이의 직선이 삼각형을 이룰 수 있는 조건 : 최대 길이의 직선이 나머지 두 직선의 합보다 크거나 같으면 성립 X
  을 이용하여 최대 길이의 직선을 먼저 구하고 두 직선과 최대 길이의 직선과 값 비교 후 판별
*/

/* [강의 풀이]
  function solution(a, b, c){
    let answer="YES", max;
    let tot=a+b+c;
    
    if(a > b) max = a;
    else max = b;
    if(c > max) max = c;
    if(tot - max <= max) answer = "NO"; 
    return answer;
  }
*/