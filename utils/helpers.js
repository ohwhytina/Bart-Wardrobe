 var time = function () {
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
      }
  
  }

  var APIkey = "d32377506e56284db17e72a06db9c9d8";

  // function to get current weather for a city

  var weather = async(cityName) => {

    // format the Open Weather api url
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIkey + "&units=imperial";

    // make a request to the url
    
    fetch(apiUrl)
    .then(function(response) {
    // request was successful
    if (response.ok) {
        response.json().then(function(data) {
        displayCityWeather(data, cityName);
        cityHistory (cityName);
      });

      // if invalid city name is typed into search bar
      } else {
      alert("Error: " + response.statusText);
      }

   })
};



  // api calls
  
 var bartStation

  module.exports = { time, weather }