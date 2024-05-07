function displayWeather(response) {
  let currentTemp = document.querySelector("#current-Temp")
  let temperature = (response.data.temperature.current);
  currentTemp.innerHTML = Math.round(temperature)
  let currentCity = document.querySelector("#current-City")
  currentCity.innerHTML =  (response.data.city)
  let weatherCondition = document.querySelector("#weather-Condition");
  weatherCondition.innerHTML = (response.data.condition.description);
  let weatherConditionData = document.querySelector("#weather-Condition-Data");
  weatherConditionData.innerHTML = `${response.data.temperature.humidity}%` ;
  let weatherConditionDataTwo = document.querySelector("#weather-Condition-Data-Two");
  weatherConditionDataTwo.innerHTML = `${response.data.wind.speed} Km/h`;
  let icon = document.querySelector("#icon")
  icon.innerHTML = `<img
            src="${response.data.condition.icon_url}"
            class="weatherEmoji"
            id="weather-Emoji" />`
  }

function searchCity(city) {
let apiKey = "50a8380f4oe8265a54940c506tc9b3e0"
 let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`
axios.get(apiUrl).then(displayWeather); 
}

function search(event) {
    event.preventDefault();
    let searchFormInput = document.querySelector("#search-Form-Input")
    searchCity (searchFormInput.value);
}



function formatDate(date) {
let day = date.getDay();
let hours = date.getHours();
let minutes = date.getMinutes();

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

if (hours < 10) {
    let hours = `0${hours}`
};

if (minutes < 10) {
    let minutes = `0${minutes}`
};

let formattedDate = days[day];
return `${formattedDate} ${hours}:${minutes}`
}

let searchForm = document.querySelector("#search-Form");
searchForm.addEventListener("submit",search);

searchCity ("Queens")


let currentDate = document.querySelector("#current-Date");
let currentTime = new Date();
currentDate.innerHTML = formatDate(currentTime);


