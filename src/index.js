function displayWeather(response) {
  let currentTemp = document.querySelector("#current-Temp");
  let temperature = (response.data.temperature.current);
  let currentCity = document.querySelector("#current-City");
  let weatherCondition = document.querySelector("#weather-Condition");
  let weatherConditionData = document.querySelector("#weather-Condition-Data");
  let weatherConditionDataTwo = document.querySelector("#weather-Condition-Data-Two");
 let currentDate = document.querySelector("#current-Date");
  let date = new Date(response.data.time * 1000);

currentDate.innerHTML = formatDate(date);
  let icon = document.querySelector("#icon")

  icon.innerHTML = `<img
            src="${response.data.condition.icon_url}"
            class="weatherEmoji"
            id="weather-Emoji"
             />`

    currentTemp.innerHTML = Math.round(temperature);
    currentCity.innerHTML =  (response.data.city);
     weatherCondition.innerHTML = (response.data.condition.description);
      weatherConditionData.innerHTML = `${response.data.temperature.humidity}%`;
       weatherConditionDataTwo.innerHTML = `${Math.round(response.data.wind.speed)} Mph`;
  }

function formatDate(date) {
let day = date.getDay();
let hours = date.getHours();
let minutes = date.getMinutes();
if (minutes < 10) {
    let minutes = `0${minutes}`
};
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];





let formattedDate = days[day];
return `${formattedDate} ${hours}:${minutes}`
};
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

function displayForecast() {
  let forecastElement = document.querySelector("#weatherForecast");

let days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu"];

let forecastHTML = "";
days.forEach(function(day) {
  


forecastHTML = forecastHTML + `
        <div class="weatherContainer">
          <ul>
            <li class="forcastDay">${day}</li>
            <li class="forecastEmoji">🌤️</li>
            <li>
              <strong class="forecastTempMaximum">78°</strong>
              <span class="forecastTempMinimum">65°</span>
            </li>
          </ul>
        </div>
        `;

});

forecastElement.innerHTML = forecastHTML;

};





let searchForm = document.querySelector("#search-Form");
searchForm.addEventListener("submit",search);

searchCity ("Queens")






