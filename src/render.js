import formatInTimeZone from "date-fns-tz/formatInTimeZone";
import newRequest from "./apiRequest";
import changeUnits from "./changeUnit";

// Select Elements
const description = document.querySelector(".description");
const city = document.querySelector(".city");
const date = document.querySelector(".date");
const time = document.querySelector(".time");
const temperatureData = document.querySelector("#temperatureData");
const temperatureIcon = document.querySelector(".infoIcon");
const feelsLikeData = document.querySelector("#feelsLikeData");
const humidityData = document.querySelector("#humidityData");
const windSpeedData = document.querySelector("#windSpeedData");
const placeInput = document.querySelector("#search");
const unitButton = document.querySelector(".changeUnit");
const errorMessage = document.querySelector(".errorMessage");
const allUnits = [" °F", " mph"]

// Async function for fetch data first then implement data to HTML
export default async function render() {
    let response;
    // Default data
    if (placeInput.value === "") {
        response = await fetch(newRequest("Burdur", unitButton.value), {mode: 'cors'})
    } else {
        response = await fetch(newRequest(placeInput.value, unitButton.value), {mode: 'cors'})
    }
    const data = await response.json();
    // If there is no problem do this
    try {
        if (response.status === 200) {
            errorMessage.innerHTML = '';
        }
        const today = new Date();
        const locale = new Intl.Locale(`en-${data.sys.country}`);
        const timeZone = locale.timeZones[0];
        description.innerHTML = data.weather[0].description;
        city.innerHTML = `${data.name  },${  data.sys.country}`;
        date.innerHTML = formatInTimeZone(today, timeZone, "dd-MMM-yyyy");
        time.innerHTML = formatInTimeZone(today, timeZone, "HH:mm");
        temperatureData.innerHTML = Math.round(data.main.temp) +  allUnits[0];
        const weatherIcon = data.weather[0].icon;
        temperatureIcon.src = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
        feelsLikeData.innerHTML = Math.round(data.main.feels_like) +  allUnits[0];
        humidityData.innerHTML = `${data.main.humidity  } %`;
        windSpeedData.innerHTML = data.wind.speed +  allUnits[1];
    // If there is a problem, handle.
    } catch (error) {
        // eslint-disable-next-line no-console
        if (response.status === 404) {
            errorMessage.innerHTML = 'Location not found. Search must be in the form of "City", "City, State" or "City, Country"'
        } else if (response.status !== 404 || response.status !== 200) {
            // eslint-disable-next-line no-console
            console.log(error);
        }
    }
}

// Change Unit
const unitChange = document.querySelector(".changeUnit");
unitChange.addEventListener("click", () => {
    changeUnits(unitChange, allUnits);
    render();
})