let currentTime = new Date();
const copyrightSpan = document.getElementById("copyright");
copyrightSpan.innerHTML = `&copy; ${currentTime.getFullYear()} Paphana Yiwsiw`;

// clock part
let dateBox = document.getElementById("clock-date");
let hourBox = document.getElementById("clock-hour");
let minuteBox = document.getElementById("clock-minute");
let secondBox = document.getElementById("clock-second");
let daySideBox = document.getElementById("clock-dayside");

function setClock() {
    currentTime = new Date();

    let timeString = currentTime.toLocaleTimeString("en-UK", {timeZone: "Asia/Bangkok", hour12: false}).split(":");
    hourBox.innerText = timeString[0];
    minuteBox.innerText = timeString[1];
    secondBox.innerText = timeString[2];

    let dateString = dateBox.innerText = `${currentTime.toLocaleDateString("en-UK", {timeZone: "Asia/Bangkok", dateStyle: "full"})}`.split(' ');
    dateBox.innerText = `${dateString[0]}, ${dateString[2]} ${dateString[1]}, ${dateString[3]}`;

    let daySide = currentTime.toLocaleDateString("en-UK", {timeZone: "Asia/Bangkok", dayPeriod: "long"}).split(", ")[1];
    daySideBox.classList = (currentTime.getHours() >= 6 || currentTime.getHours() <= 18) 
                            ? "ms-3 bi bi-moon-stars fs-4" 
                            : "ms-3 bi bi-sun fs-4";
};

setClock();
setInterval(setClock, 1000);

// weather part
let weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=13.754&longitude=100.5014&current=temperature_2m,relative_humidity_2m,apparent_temperature,rain,cloud_cover,wind_speed_10m,wind_direction_10m&timezone=Asia%2FBangkok&forecast_days=1`;
let tempBox = document.getElementById("weather-temp");
let feelLikeBox = document.getElementById("weather-feel-like");
let humidityBox = document.getElementById("weather-humidity");
let rainBox = document.getElementById("weather-rain");
let cloudBox = document.getElementById("weather-cloud");
let windSpeedBox = document.getElementById("weather-wind-speed");
let windDirBox = document.getElementById("weather-wind-direction");
fetch(weatherUrl)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
        let currentWeather = data.current;
        let currentUnits = data.current_units;
        tempBox.innerHTML = `${currentWeather.temperature_2m} <span class="fs-7">${currentUnits.temperature_2m}</span>`;
        feelLikeBox.innerHTML = `feel like ${currentWeather.apparent_temperature} <span class="fs-7">${currentUnits.temperature_2m}</span>`;
        humidityBox.innerHTML = `${currentWeather.relative_humidity_2m} <span class="fs-7">${currentUnits.relative_humidity_2m}</span>`;
        rainBox.innerHTML = `${currentWeather.rain} <span class="fs-7">${currentUnits.rain}</span>`;
        cloudBox.innerHTML = `${currentWeather.cloud_cover} <span class="fs-7">${currentUnits.cloud_cover}</span>`;
        windSpeedBox.innerHTML = `${currentWeather.wind_speed_10m} <span class="fs-7">${currentUnits.wind_speed_10m}</span>`;
        windDirBox.innerHTML = `at ${currentWeather.wind_direction_10m}<span class="fs-7">${currentUnits.wind_direction_10m}</span>`;
    }) 
    .catch((err) => {
        console.error("Weather Error: " + err);
    });