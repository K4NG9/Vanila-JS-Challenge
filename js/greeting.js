const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const loginIntro = document.querySelector("#intro")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//const link = document.querySelector('a');

function onLoginSubmit(event) {
  event.preventDefault();
  // 브라우저가 수행하는 기본 동작을 수행하지 않도록 막아주는 기능
  loginIntro.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello, ${username}.`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginIntro.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

//function handleLinkClick(event) {
//  event.preventDefault();
//  console.log(event);
//  alert('clicked');
//  alert는 특정 action을 실행했을때 경고창이 나타나며 브라우저가 수행하는 기본동작을 막음. 하지만 ok를 누르면 다시 기본동작 실행함.
//}
//
//link.addEventListener('click',handleLinkClick);