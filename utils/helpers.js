 var date = function () {
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
      }
  
  }

  const axios = require('axios');
  var APIkey = "d32377506e56284db17e72a06db9c9d8";

  // function to get current weather for a city

//   module.exports = {

//     weather: ({ zipCode }) => {


//     // format the Open Weather api url
//     return fetch("api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&appid=" + APIkey + "&units=imperial", {
// 			params: {
//         zipCode
// 			}
// 		});
// 	}
// }

// .then(function(response) {
//   // request was successful
//   if (response.ok) {
//       response.json().then(function(data) {
//       displayCityWeather(data, zipCode);
//     });

//     // if invalid city name is typed into search bar
//     } else {
//     alert("Error: " + response.statusText);
//   }

// })

var weather = async(zipCode) => {

  // format the Open Weather api url
  var apiUrl = "api.openweathermap.org/data/2.5/weather?zip=" + zipCode + "us&appid=" + APIkey + "&units=imperial";

  // make a request to the url
  
  fetch(apiUrl)
  .then(function(response) {
  // request was successful
  if (response.ok) {
      response.json().then(function(data) {
      displayCityWeather(data, zipCode);
      console.log(data, zipCode)
    });

    // if invalid city name is typed into search bar
    } else {
    alert("Error: " + response.statusText);
    }

 })
};


var displayCityWeather = function(data) {
  console.log(data)

  // adds classes and text for display:
  // display city name
  // display current time
  // display icon representation of weather conditions
  // display temperature
  // display wind speed

  var weather = $(".current-weather")
  var title = $("<h3>").addClass("card-header").text(`${data.name} (${moment().format('l')})`)
  var temperature = $("<p>").addClass("card-text").text("Temperature: " + data.main.temp +" °F")
  var wind = $("<p>").addClass("card-text").text("Wind Speed: " + data.wind.speed + " MPH")
  var icon = $("<img>").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png")

  // append city name, temperature, humidity and wind to display on page, append weather icon to title

  title.append(icon)
  weather.append(title)
  weather.append(temperature)
  weather.append(humidity)
  weather.append(wind)
};
  // api calls
  
// api for list of BART stations

var bartStationList = function (cb) {
  
  var apiBartStationUrl = "http://api.bart.gov/api/stn.aspx?cmd=stns&json=y";

  fetch(apiBartStationUrl)
  .then(function(response) {
  // request was successful
  if (response.ok) {
      response.json().then(function(data) {
      displayCityWeather(data);
      cb(data)
      console.log(data)
    });

    // if invalid city name is typed into search bar
    } else {
    alert("Error: " + response.statusText);
    }

 })
};

  module.exports = { date, weather, displayCityWeather, bartStationList }