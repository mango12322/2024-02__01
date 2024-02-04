// 내 api 가져오기
const API_KEY = "cab06df7aef008ca837eb685c7ac5a10";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector(".weather span:first-child");
        const city = document.querySelector(".weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}도`;
    });
}

function onGeError() {
    alert("에러");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeError);