const API_KEY = "31a3e217a8fda2d86748e1dfc8793de0";

const onGeoOK = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data)=> {
            const weather = document.querySelector("#weather div:first-child");
            const city = document.querySelector("#weather div:last-child");
            weather.innerText = `${data.weather[0].main} / ${Math.floor(data.main.temp)}˚`;
            weather.id = "weather_temp"
            city.innerText = data.name;
            city.id = "city"
        })
}
const onGeoError = () => {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);