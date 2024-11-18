// Generate zone selection
let ALL_ZONE = ZONE_INFO.flatMap(z => z.zoneKey),
    zoneSelectorBox = document.getElementById("zone-selector");

console.log(ALL_ZONE);
let zoneSelectorLinks = ALL_ZONE.flatMap(z => `<a href="?zone=${z}" class="text-white">${z}</a>`);
zoneSelectorBox.innerHTML = zoneSelectorLinks.join(' | ');
console.log(zoneSelectorLinks);


// Zone selection part
// ZONE_INFO is defined in clock-zone.js file
let urlParam = window.location.search;
let searchParam = new URLSearchParams(urlParam);
let selectedZoneKey = searchParam.get("zone");
if (selectedZoneKey === null || 
    ZONE_INFO.filter(zone => zone.zoneKey === selectedZoneKey.toUpperCase()).length == 0){
        selectedZoneKey = 'TH-BKK';
}
let selectedZone = ZONE_INFO.filter(zone => zone.zoneKey === selectedZoneKey)[0];

let selectedTimezone = selectedZone.timeZone,
    timezoneURL = selectedTimezone.replace('/','%2F'),
    selectedLat = selectedZone.lat,
    selectedLong = selectedZone.long;

document.getElementById("zone-emoji").innerText = selectedZone.zoneEmoji;
document.getElementById("zone-name").innerText = selectedZone.zoneName;

// clock part
let currentTime = new Date();
// const copyrightSpan = document.getElementById("copyright");
// copyrightSpan.innerHTML = `&copy; ${currentTime.getFullYear()} Paphana Yiwsiw`;

let dateBox = document.getElementById("clock-date");
let hourBox = document.getElementById("clock-hour");
let minuteBox = document.getElementById("clock-minute");
let secondBox = document.getElementById("clock-second");
let daySideBox = document.getElementById("clock-dayside");

function setClock() {
    currentTime = new Date();

    let timeString = currentTime.toLocaleTimeString("en-UK", {timeZone: selectedTimezone, hour12: false}).split(":");
    hourBox.innerText = timeString[0];
    minuteBox.innerText = timeString[1];
    secondBox.innerText = timeString[2];

    let dateString = dateBox.innerText = `${currentTime.toLocaleDateString("en-UK", {timeZone: selectedTimezone, dateStyle: "full"})}`.split(' ');
    dateBox.innerText = `${dateString[0]}, ${dateString[2]} ${dateString[1]}, ${dateString[3]}`;

    daySideBox.classList = (timeString[0] >= '06' && timeString[0] <= '18') 
                            ? "ms-3 bi bi-sun fs-4" 
                            : "ms-3 bi bi-moon-stars fs-4";
};

setClock();
setInterval(setClock, 1000);

// weather part
let weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${selectedLat}&longitude=${selectedLong}&current=temperature_2m,relative_humidity_2m,apparent_temperature,rain,cloud_cover,wind_speed_10m,wind_direction_10m&timezone=${timezoneURL}&forecast_days=1`,
    tempBox = document.getElementById("weather-temp"),
    feelLikeBox = document.getElementById("weather-feel-like"),
    humidityBox = document.getElementById("weather-humidity"),
    rainBox = document.getElementById("weather-rain"),
    cloudBox = document.getElementById("weather-cloud"),
    windSpeedBox = document.getElementById("weather-wind-speed"),
    windDirBox = document.getElementById("weather-wind-direction"),
    lastUpdatedBox = document.getElementById("weather-last-updated");

function setWeather() {
    fetch(weatherUrl)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        let currentWeather = data.current;
        let currentUnits = data.current_units;
        tempBox.innerHTML = `${currentWeather.temperature_2m} <span class="fs-7">${currentUnits.temperature_2m}</span>`;
        feelLikeBox.innerHTML = `feel like ${currentWeather.apparent_temperature} <span class="fs-7">${currentUnits.temperature_2m}</span>`;
        humidityBox.innerHTML = `${currentWeather.relative_humidity_2m} <span class="fs-7">${currentUnits.relative_humidity_2m}</span>`;
        rainBox.innerHTML = `${currentWeather.rain} <span class="fs-7">${currentUnits.rain}</span>`;
        cloudBox.innerHTML = `${currentWeather.cloud_cover} <span class="fs-7">${currentUnits.cloud_cover}</span>`;
        windSpeedBox.innerHTML = `${currentWeather.wind_speed_10m} <span class="fs-7">${currentUnits.wind_speed_10m}</span>`;
        windDirBox.innerHTML = `at ${currentWeather.wind_direction_10m}<span class="fs-7">${currentUnits.wind_direction_10m}</span>`;
        lastUpdatedBox.innerHTML = `Last Updated at ${currentTime.toLocaleTimeString("en-UK", {timeZone: selectedTimezone, hour12: false})}`
    }) 
    .catch((err) => {
        console.error("Weather Error: " + err);
    });
};

setWeather();
setInterval(setWeather, 60 * 60 * 1000); // refresh every hour