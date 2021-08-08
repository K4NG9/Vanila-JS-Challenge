const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

//setInterval(sayHello, 5000);
//특정 함수를 시간 간격을 두고 반복해서 실행하게 하는 함수, setInterval(함수, 시간ms)

//setTimeout(sayHello, 5000);
//특정 함수를 일정 시간 후 실행하는 함수, setTimeout(함수, 시간ms)

//"1".padStart(2, "0");
//"x".padStart(y, "z"); : 문자열의 길이가 x인 문자를 길이가 y만큼 늘이도록 하고, 만약 문자의 길이가 y만큼 되지 않는다면 앞에 z를 추가함.

//"1".padEnd(2, "0");
//"x".padEnd(y, "z"); : 문자열의 길이가 x인 문자를 길이가 y만큼 늘이도록 하고, 만약 문자의 길이가 y만큼 되지 않는다면 끝에 z를 추가함.

//String(x) : x의 데이터 타입을 string으로 변환시켜줌.