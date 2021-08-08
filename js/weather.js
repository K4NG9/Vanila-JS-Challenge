const API_KEY = "20cf334272a300702b7264a0a0918797";


function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const city = document.querySelector("#weather div:first-child");
      city.innerHTML =  `<i class="fas fa-street-view"></i> ${data.name}`;
      const weather = document.querySelector("#weather div:last-child");
      weather.innerText = `${Math.round(data.main.temp*10)/10}°C / ${data.weather[0].main}`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

//navigator.geolocation.getCurrentPosition(x, y);
//현재 내 위치로 특정 함수를 실행하고 싶을때 사용함. 이때, x에는 위치확인을 성공했을 때 실행할 함수를, y에는 위치확인을 실패했을 때 실행 할 함수를 정의하여 넣어야 함.
//console.log(position) : 내 위치를 확인했을 때 브라우저에서 제공하는 위치 관련 정보를 확인 할 수 있음(object)