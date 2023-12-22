//****************Homework JS DATA types*****************************************

    let apiKey = "da3b4f2006boa20498f58408839atf92";
    let cityElement = document.querySelector("#city");
    let temperatureElement = document.querySelector("#temp");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let iconElement = document.querySelector("#icon");
    let cityElementPrompt = prompt("Enter a city");

 
if (cityElementPrompt === null || cityElementPrompt.length === 0) {
  alert("Please enter a city. Field shouldn't be empty");
  cityElementPrompt = prompt("Enter a city");
}
   cityElementPrompt = cityElementPrompt.trim();

function getWeatherFromAlert(cityName) {

  const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(function (response) {
    console.log(response);

    
    if (response.data.status === "not_found") {
      alert(
        `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${cityName}`
      );
      return;
    }
    let humidity = response.data.temperature.humidity;
    let temperature = Math.round(response.data.temperature.current);
    
    alert(
      `It is currently ${Math.round(temperature)}°C (${Math.round(
        (temperature * 9) / 5 + 32)}°F) in ${cityName} with a humidity of ${humidity}%`
    );
   
  })
}
getWeatherFromAlert(cityElementPrompt);
getWeather(cityElementPrompt);
//****************Homework HTML/CSS to JS*****************************************

//In your project, display the current date and time using JavaScript: Tuesday 16:00
let currentTime = new Date();
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let currentDay = days[date.getDay()];

  let currentHour = date.getHours();
    if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  let currentMinutes = date.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }

  let formattedDate = `${currentDay} ${currentHour} : ${currentMinutes}`;

  return formattedDate;
}

let dateTime = document.querySelector("#current-day-time");
dateTime.innerHTML = formatDate(currentTime);

//Add a search engine: a search bar with a button. When searching for a city (i.e. Paris),
// display the city name on the page after the user submits the form.


function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector(".search-field");
  let enteredCity = cityInput.value;
  return getWeather(enteredCity);

}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

//In your project, when a user searches for a city (example: Sydney), 
//it should display the name of the city on the result page and the current temperature of the city. 


  

function getWeather(cityName) {

const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(function (response) {
    console.log(response);

  
    if (response.data.status === "not_found") { 
        cityElement.innerHTML = '<h5>City not found. Please check the city name and try again.</h5>'; 
        return;
    }
    let humidity = response.data.temperature.humidity;
    let wind = response.data.wind.speed;
    let temperature = Math.round(response.data.temperature.current);
   // let icon = response.data.condition.icon;
    let iconUrl =  response.data.condition.icon_url; 
    cityElement.innerHTML = `${cityName}`;
    humidityElement.innerHTML = `${humidity}`;
    windSpeedElement.innerHTML= `${wind}`;
    temperatureElement.innerHTML = `${temperature}`;
   iconElement.innerHTML =  "<img src='" + iconUrl + "'>";


})

}

