/* [문제] 연필 개수

  연필 1 다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생수 를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.
  ▣ 입력설명
  첫 번째 줄에 1000 이하의 자연수 N이 입력된다.
  
  ▣ 출력설명
  첫 번째 줄에 필요한 다스 수를 출력합니다.
  
  ▣ 입력예제 1
    25
  ▣ 출력예제 1
    3
  
  ▣ 입력예제 2
    178
  ▣ 출력예제 2
    15
*/ 

function solution(n) {
  let pencil = Math.floor(n / 12);

  pencil = n % 12 !== 0 ? pencil + 1 : pencil;
  
  return console.log(pencil);
}

solution(24);
solution(25);
solution(178);
solution(1);

/* [풀이]
  학생 수 N명을 연필 한 다스인 12로 나눈 몫을 pencil
  N명을 12로 나눴을 때 나머지가 존재 여부에 따라 pencil에 +1 처리

*/

/* [강의 풀이]
* 나눈 몫에 소수점이 존재 할 경우 나머지가 존재한다 => Math.ceil()을 처리하여 값을 올림 처리
  function solution(n) {
    let pencil = Math.ceil(n / 12);

    return console.log(pencil);
  }

*/