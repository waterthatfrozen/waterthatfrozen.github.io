// Generate zone selection
let ALL_ZONE = ZONE_INFO.flatMap(z => z.zoneKey),
    zoneSelectorBox = document.getElementById("zone-selector");


// Zone selection part
// ZONE_INFO is defined in clock-zone.js file
let urlParam = window.location.search;
let searchParam = new URLSearchParams(urlParam);
let selectedZoneKey = searchParam.get("zone");
selectedZoneKey = selectedZoneKey ? selectedZoneKey.toUpperCase() : null;
if (selectedZoneKey === null || 
    ZONE_INFO.filter(zone => zone.zoneKey === selectedZoneKey).length == 0){
        selectedZoneKey = 'TH-BKK';
}
let selectedZone = ZONE_INFO.filter(zone => zone.zoneKey === selectedZoneKey)[0];

// optional secondary zone
let selectedZone2Key = searchParam.get("zone2");
selectedZone2Key = selectedZone2Key ? selectedZone2Key.toUpperCase() : null;
let selectedZone2 = null;
if (selectedZone2Key && ZONE_INFO.filter(zone => zone.zoneKey === selectedZone2Key).length > 0){
    selectedZone2 = ZONE_INFO.filter(zone => zone.zoneKey === selectedZone2Key)[0];
}
const isDual = !!selectedZone2;

// render zone chips with active state and alt-click for secondary selection
let zoneSelectorLinks = ZONE_INFO.map(z => {
    let isActive = z.zoneKey === selectedZoneKey ? 'active' : '';
    let zone2Query = selectedZone2Key ? `&zone2=${selectedZone2Key}` : '';
    return `<a href="?zone=${z.zoneKey}${zone2Query}" data-zone="${z.zoneKey}" class="text-white ${isActive}" title="${z.zoneName}">${z.zoneEmoji} ${z.zoneKey}</a>`;
});
zoneSelectorBox.innerHTML = zoneSelectorLinks.join('');

// click handler: Alt-click to set zone2 without changing zone
zoneSelectorBox.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', function(e){
        const z = this.getAttribute('data-zone');
        if (e.altKey){
            e.preventDefault();
            const params = new URLSearchParams(window.location.search);
            params.set('zone', selectedZoneKey);
            params.set('zone2', z);
            window.location.search = params.toString();
        }
    });
});

// Populate dropdown selectors
const select1 = document.getElementById('zone-select-1');
const select2 = document.getElementById('zone-select-2');
const switchBtn = document.getElementById('zone-switch');
if (select1 && select2){
    select1.innerHTML = ZONE_INFO.map(z => `<option value="${z.zoneKey}">${z.zoneEmoji} ${z.zoneKey} - ${z.zoneName}</option>`).join('');
    select2.innerHTML = `<option value="">(none)</option>` + ZONE_INFO.map(z => `<option value="${z.zoneKey}">${z.zoneEmoji} ${z.zoneKey} - ${z.zoneName}</option>`).join('');
    select1.value = selectedZoneKey;
    select2.value = selectedZone2Key || '';

    const updateUrl = () => {
        const params = new URLSearchParams(window.location.search);
        params.set('zone', select1.value);
        if (select2.value){
            params.set('zone2', select2.value);
        } else {
            params.delete('zone2');
        }
        window.location.search = params.toString();
    };
    select1.addEventListener('change', updateUrl);
    select2.addEventListener('change', updateUrl);

    // switch handler
    const setSwitchState = () => {
        if (switchBtn){
            switchBtn.disabled = !select2.value;
        }
    };
    setSwitchState();
    select2.addEventListener('change', setSwitchState);
    if (switchBtn){
        switchBtn.addEventListener('click', () => {
            if (!select2.value) return;
            const p = select1.value;
            const s = select2.value;
            const params = new URLSearchParams(window.location.search);
            params.set('zone', s);
            params.set('zone2', p);
            window.location.search = params.toString();
        });
    }
}

let selectedTimezone = selectedZone.timeZone,
    timezoneURL = selectedTimezone.replace('/','%2F'),
    selectedLat = selectedZone.lat,
    selectedLong = selectedZone.long;

document.getElementById("zone-emoji").innerText = selectedZone.zoneEmoji;
document.getElementById("zone-name").innerText = selectedZone.zoneName;
// secondary zone header
const clock2Section = document.getElementById("clock2-section");
const zone2EmojiEl = document.getElementById("zone2-emoji");
const zone2NameEl = document.getElementById("zone2-name");
const daySideBox2 = document.getElementById("clock2-dayside");
const dateBox2 = document.getElementById("clock2-date");
const tempSide = document.getElementById('temp-side');
const weatherSection = document.getElementById('weather-section');
const secondBoxColon = document.getElementById('clock-second-colon');
const secondBox2Colon = document.getElementById('clock2-second-colon');
if (selectedZone2){
    zone2EmojiEl.innerText = selectedZone2.zoneEmoji;
    zone2NameEl.innerText = selectedZone2.zoneName;
    clock2Section.classList.remove('display-none');
    tempSide.classList.add('display-none');
    weatherSection.classList.add('display-none');
    const wrapper = document.getElementById('clock-dual-wrapper');
    if (wrapper) wrapper.classList.add('dual');
} else {
    // single-clock mode: show full weather, hide temp-only side panel
    clock2Section.classList.add('display-none');
    tempSide.classList.add('display-none');
    weatherSection.classList.remove('display-none');
    const wrapper = document.getElementById('clock-dual-wrapper');
    if (wrapper) wrapper.classList.remove('dual');
}

// clock part
let currentTime = new Date();
// const copyrightSpan = document.getElementById("copyright");
// copyrightSpan.innerHTML = `&copy; ${currentTime.getFullYear()} Paphana Yiwsiw`;

let dateBox = document.getElementById("clock-date");
let hourBox = document.getElementById("clock-hour");
let minuteBox = document.getElementById("clock-minute");
let secondBox = document.getElementById("clock-second");
let daySideBox = document.getElementById("clock-dayside");
// secondary clock elements
const hourBox2 = document.getElementById("clock2-hour");
const minuteBox2 = document.getElementById("clock2-minute");
const secondBox2 = document.getElementById("clock2-second");

// toggle seconds visibility now that elements exist
if (isDual){
    secondBoxColon.classList.add('display-none');
    secondBox.classList.add('display-none');
    if (secondBox2Colon) secondBox2Colon.classList.add('display-none');
    if (secondBox2) secondBox2.classList.add('display-none');
} else {
    secondBoxColon.classList.remove('display-none');
    secondBox.classList.remove('display-none');
}

// helpers for rolling animation
function pad2(v) {
    return v.toString().padStart(2, '0');
}

function animateClockBox(boxEl, prevValue, nextValue) {
    if (prevValue === nextValue) return; // no change, no animation

    // Build roller structure: [prev] on top, [next] below
    const roller = document.createElement('span');
    roller.className = 'clock-roller';

    const linePrev = document.createElement('span');
    linePrev.className = 'clock-line';
    linePrev.textContent = prevValue;

    const lineNext = document.createElement('span');
    lineNext.className = 'clock-line';
    lineNext.textContent = nextValue;

    // Replace content with roller
    boxEl.innerHTML = '';
    roller.appendChild(linePrev);
    roller.appendChild(lineNext);
    boxEl.appendChild(roller);

    // force reflow then animate up
    void roller.offsetHeight;
    roller.classList.add('clock-animate-up');

    const onDone = function() {
        roller.removeEventListener('transitionend', onDone);
        boxEl.textContent = nextValue; // settle to new value
    };
    roller.addEventListener('transitionend', onDone);
}

let prevHour = null, prevMinute = null, prevSecond = null;
let prevHour2 = null, prevMinute2 = null, prevSecond2 = null;

function setClock() {
    currentTime = new Date();

    let timeString = currentTime.toLocaleTimeString("en-UK", {timeZone: selectedTimezone, hour12: false}).split(":");
    let h = pad2(parseInt(timeString[0], 10));
    let m = pad2(parseInt(timeString[1], 10));
    let s = pad2(parseInt(timeString[2], 10));

    // initial render without animation
    if (prevHour === null) {
        hourBox.textContent = h;
        minuteBox.textContent = m;
        if (!selectedZone2) secondBox.textContent = s;
    } else {
        animateClockBox(hourBox, prevHour, h);
        animateClockBox(minuteBox, prevMinute, m);
        if (!selectedZone2) animateClockBox(secondBox, prevSecond, s);
    }

    prevHour = h; prevMinute = m; prevSecond = s;

    let dateString = dateBox.innerText = `${currentTime.toLocaleDateString("en-UK", {timeZone: selectedTimezone, dateStyle: "full"})}`.split(' ');
    dateBox.innerText = `${dateString[0]}, ${dateString[2]} ${dateString[1]}, ${dateString[3]}`;

    daySideBox.classList = (h >= '06' && h <= '18') 
                            ? "ms-3 bi bi-sun fs-4" 
                            : "ms-3 bi bi-moon-stars fs-4";

    // secondary clock update
    if (selectedZone2){
        let timeString2 = currentTime.toLocaleTimeString("en-UK", {timeZone: selectedZone2.timeZone, hour12: false}).split(":");
        let h2 = pad2(parseInt(timeString2[0], 10));
        let m2 = pad2(parseInt(timeString2[1], 10));
        let s2 = pad2(parseInt(timeString2[2], 10));

        if (prevHour2 === null){
            hourBox2.textContent = h2;
            minuteBox2.textContent = m2;
            // seconds hidden in dual mode
        } else {
            animateClockBox(hourBox2, prevHour2, h2);
            animateClockBox(minuteBox2, prevMinute2, m2);
            // skip seconds animation in dual mode
        }

        prevHour2 = h2; prevMinute2 = m2; prevSecond2 = s2;

        daySideBox2.classList = (h2 >= '06' && h2 <= '18') 
                                ? "ms-3 bi bi-sun fs-4" 
                                : "ms-3 bi bi-moon-stars fs-4";

        let dateString2 = `${currentTime.toLocaleDateString("en-UK", {timeZone: selectedZone2.timeZone, dateStyle: "full"})}`.split(' ');
        dateBox2.innerText = `${dateString2[0]}, ${dateString2[2]} ${dateString2[1]}, ${dateString2[3]}`;
    }
};

setClock();
setInterval(setClock, 1000);

// weather part
let weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${selectedLat}&longitude=${selectedLong}&current=temperature_2m,relative_humidity_2m,apparent_temperature,rain,cloud_cover,wind_speed_10m,wind_direction_10m&timezone=${timezoneURL}&forecast_days=1`,
    tempBox = document.getElementById("weather-temp"),
    tempBox1 = document.getElementById("weather-temp-1"),
    tempBox2 = document.getElementById("weather-temp-2"),
    tempPrimary = document.getElementById("temp-primary"),
    tempSecondary = document.getElementById("temp-secondary"),
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
        const primaryTempHtml = `${currentWeather.temperature_2m} <span class="fs-7">${currentUnits.temperature_2m}</span>`;
        tempBox.innerHTML = primaryTempHtml;
        if (tempBox1) tempBox1.innerHTML = primaryTempHtml;
        if (tempPrimary) tempPrimary.innerHTML = primaryTempHtml;
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
    if (selectedZone2){
        const tz2 = selectedZone2.timeZone.replace('/','%2F');
        const weatherUrl2 = `https://api.open-meteo.com/v1/forecast?latitude=${selectedZone2.lat}&longitude=${selectedZone2.long}&current=temperature_2m&timezone=${tz2}&forecast_days=1`;
        fetch(weatherUrl2)
        .then(res => res.json())
        .then(data2 => {
            const t = data2.current.temperature_2m;
            const u = data2.current_units.temperature_2m;
            if (tempBox2){
                tempBox2.innerHTML = `${t} <span class="fs-7">${u}</span>`;
            }
            if (tempSecondary){
                tempSecondary.innerHTML = `${t} <span class="fs-7">${u}</span>`;
            }
        })
        .catch(err => console.error("Weather 2 Error: " + err));
    }
};

setWeather();
setInterval(setWeather, 60 * 60 * 1000); // refresh every hour