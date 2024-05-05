

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

let currentDate = document.querySelector("#current-Date");
let currentTime = new Date();
currentDate.innerHTML = formatDate(currentTime);


