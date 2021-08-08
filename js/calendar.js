//calendar 파트
let date = new Date();
let today = new Date();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const SELECTDATE_KEY = "selected-Date"

//달력 그리는 함수 구성
function renderCalendar() {
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  
  //Year-Month
  const calendarHeadYear = document.querySelector(".year-month span:first-child");
  const calendarHeadMonth = document.querySelector(".year-month span:last-child");
  calendarHeadYear.innerText = `${currentYear}`;
  calendarHeadMonth.innerText = `${currentMonth+1}`;
  
  //저번달 마지막 date, 이번달 마지막 date 구하기
  const prevLast = new Date(currentYear, currentMonth, 0);
  const prevLastDay = prevLast.getDay();
  const prevLastDate = prevLast.getDate();
  
  const thisLast = new Date(currentYear, currentMonth + 1, 0);
  const thisLastDay = thisLast.getDay();
  const thisLastDate = thisLast.getDate();
  
  //저번달, 이번달, 다음달 배열
  const prevDates = [];
  const thisDates = [...Array(thisLastDate + 1).keys()].slice(1);
  const nextDates = [];
  const blankDates = [];
  
  //저번달 마지막주
  if (prevLastDay !== 6) {
    for (let i = 0; i < prevLastDay + 1; i++) {
      prevDates.unshift(prevLastDate - i);
    }
  };
  
  //다음달 첫주
  for (let i = 1; i < 7 - thisLastDay; i++) {
    nextDates.push(i);
  };

  //빈 날짜
  if (prevDates.length + thisDates.length + nextDates.length < 36) {
    for (let i = 0; i < 7; i++) {
      blankDates.push("");
    }
  };

  //저번달, 이번달, 다음달 날짜에 다른 class 적용
  prevDates.forEach((date, i) => {
    prevDates[i] = `<div class = "date prev">${date}</div>`
  })
  
  thisDates.forEach((date, i) => {
    thisDates[i] = `<div class = "date this">${date}</div>`
  })
  
  nextDates.forEach((date, i) => {
    nextDates[i] = `<div class = "date next">${date}</div>`
  })

  blankDates.forEach((date, i) => {
    blankDates[i] = `<div class = "date blank">${date}</div>`
  })

  //한달짜리 달력으로 합치기
  const dates = prevDates.concat(thisDates, nextDates, blankDates);

  //한달짜리 달력을 html에 요소로 추가
  document.querySelector(".dates").innerHTML = dates.join('');

  //const today = new Date();
  if (currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
    for (let date of document.querySelectorAll(".this")) {
      if (+date.innerText === today.getDate()) {
        date.classList.add("today");
        break;
      }
    }
  }

  
  //특정 날짜 선택 후 classlist에 selected 추가
  const SELECTED_CLASSNAME = "selected"
  const HIDDEN_CLASSNAME = "hidden"
  const unclickedDates = document.querySelectorAll(".date");
  
  function chooseDate() {
    for (let i = 0; i < unclickedDates.length; i++) {
      unclickedDates[i].classList.remove(SELECTED_CLASSNAME);
    }  event.target.classList.add(SELECTED_CLASSNAME);

    let selectedDate = document.querySelector(".selected");
    let selDate = new Date(`${currentYear}-${currentMonth + 1}-${selectedDate.innerText}`);
    let selDateValue = `${selDate.getFullYear()}${selDate.getMonth()+1}${selDate.getDate()}`
    //let SELDATE_KEY = `${currentYear}${currentMonth+1}${selectedDate.innerText}`

    miniCalYear.innerText = `${selDate.getFullYear()}`;
    miniCalMonth.innerText = `${selDate.getMonth() + 1}`;
    miniCalDate.innerText = `${selDate.getDate()}`;
    miniCalDay.innerText = `${days[selDate.getDay()]}`;

    localStorage.setItem(SELECTDATE_KEY, JSON.stringify(selDateValue))
  };

  for (let i = 0; i < unclickedDates.length; i++) {
    unclickedDates[i].addEventListener("click", chooseDate);
  }
}

renderCalendar();
  
  //이전달 버튼 실행 함수
function goPrev() {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
}
  
  //오늘 버튼 실행 함수
function goNext() {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
}
  
  //다음달 버튼 실행 함수
function goToday() {
  date = new Date();
  renderCalendar();
}
  
  //각 버튼별 함수 할
const goPrevBtn = document.querySelector(".nav-btn-left");
const goNextBtn = document.querySelector(".nav-btn-right");
const goHomeBtn = document.querySelector(".nav-btn-home");
  
goPrevBtn.addEventListener("click", goPrev);
goNextBtn.addEventListener("click", goNext);
goHomeBtn.addEventListener("click", goToday);
  
  //mini-calendar 파트
const todayYear = today.getFullYear();
const todayMonth = today.getMonth () + 1;
const todayDate = today.getDate();
const todayDay = days[today.getDay()];
const miniCalYear = document.querySelector(".mini-calendar__head span:first-child");
const miniCalMonth = document.querySelector(".mini-calendar__head span:last-child");
const miniCalDate = document.querySelector(".mini-calendar__date");
const miniCalDay = document.querySelector(".mini-calendar__day");

let slctDate = new Date(`${miniCalYear.innerText}-${miniCalMonth.innerText}-${miniCalDate.innerText}`);

miniCalYear.innerText = todayYear;
miniCalMonth.innerText = todayMonth;
miniCalDate.innerText = todayDate;
miniCalDay.innerText = todayDay;
  
  
  
  //--------------------------------------------------------------


  const toDoForm = document.getElementById("todo-form");
  const toDoInput = toDoForm.querySelector("input");
  const toDoList = document.getElementById("todo-list");
  
  const TODOS_KEY = "todos";
  
  let toDos = [];
  
  
  function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  }
  
  function deleteToDo(event) {
    const deleteLi = event.target.parentElement;
    deleteLi.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(deleteLi.id));
    saveToDos();
  }
  
  function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo );
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
  }
  
  
  function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
      text: newToDo,
      id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
  }
  
  toDoForm.addEventListener("submit", handleToDoSubmit);
  
  const savedToDos = localStorage.getItem(TODOS_KEY);
  
  if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); 
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
  };
  
  //toDoInput.value = "" : input 안에 입력한 내용을 특정 함수가 실행 될 때 초기화
  //toDos.push(newToDo) : newToDo를 toDos(array)에 추가
  //event.target.parentElement : 특정 event가 일어나는 상황에서 그 event가 실행되는 요소의 부모요소
  //localStorage.setItem("todos", toDos) : 브라우저의 로컬 저장소로 저장(key : todos, value : toDos)
  //JSON.stringify(toDos) : toDos(array)를 string형식으로 변환
  //JSON.parse(localStorage.getItem("todos")) : 브라우저의 로컬 저장소에서 가져온 "todos"를 text형식에서 원래의 array 형태로 변환
  //array.forEach(function) : array에 있는 각각의 item에 대해 function(item)을 실행
  //forEach(function)은 function을 연속 실행 x, function을 하나씩 실행
  //Date.now() : ms(1000분의 1초)를 주는 함수
  //array.filter(function) : array에 있는 각각의 item을 function에 넣어 실행, 그 값이 true인 item만 남아서 새로운 array가 만들어짐.
  //parseInt(x) : x의 데이터 타입을 number로 변경해줌
//const toDoForm = document.getElementById("todo-form");
//const toDoInput = toDoForm.querySelector("input");
//const toDoList = document.getElementById("todo-list");
//
//let toDos = []; 
//
//function saveToDos() {
//  let TODOS_KEY = localStorage.getItem(SELECTDATE_KEY)
//  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
//}  
//
//function deleteToDo(event) {
//  const deleteLi = event.target.parentElement;
//  deleteLi.remove();
//  toDos = toDos.filter(toDo => toDo.id !== parseInt(deleteLi.id));
//  saveToDos();
//}  
//
//function paintToDo(newToDo) {
//  const li = document.createElement("li");
//  li.id = newToDo.id;
//  const span = document.createElement("span");
//  span.innerText = newToDo.text;
//  const button = document.createElement("button");
//  button.innerText = "✖︎";
//  button.addEventListener("click", deleteToDo );
//  li.appendChild(span);
//  li.appendChild(button);
//  toDoList.appendChild(li);
//}  
//
//function handleToDoSubmit(event) {
//  event.preventDefault();
//  const newToDo = toDoInput.value;
//  toDoInput.value = "";
  //let toDoDate = `${miniCalYear.innerText}${miniCalMonth.innerText}${miniCalDate.innerText}`;
  //const newToDoObj = {
  //  text: newToDo,
  //  date: toDoDate,
  //  id: Date.now(),
//  };  
//  toDos.push(newToDoObj);
//  paintToDo(newToDoObj);
//  saveToDos();
//}  
//
//toDoForm.addEventListener("submit", handleToDoSubmit);
//
//const savedToDos = localStorage.getItem(TODOS_KEY);
//
//if (savedToDos !== null) {
//  const parsedToDos = JSON.parse(savedToDos); 
//  toDos = parsedToDos;
//  parsedToDos.forEach(paintToDo);
//};