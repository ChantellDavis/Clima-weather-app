function displayWeather(response) {
  let currentTemp = document.querySelector("#current-Temp")
  let temperature = Math.round (response.data.temperature.current)
  let currentCity = document.querySelector("#current-City")
  currentCity.innerHTML =  response.data.city  
  currentTemp.innerHTML = temperature
}

function search(event) {
    event.preventDefault();
    let searchFormInput = document.querySelector("#search-Form-Input")
   

let apiKey = "50a8380f4oe8265a54940c506tc9b3e0"
let city = searchFormInput.value
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=imperial`
axios.get(apiUrl).then(displayWeather);
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
};

let searchForm = document.querySelector("#search-Form");
searchForm.addEventListener("submit",search)

let currentDate = document.querySelector("#current-Date");
let currentTime = new Date();
currentDate.innerHTML = formatDate(currentTime);


