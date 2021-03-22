// axios 
const axios = require('axios');
// IMPORT CUSTOM FUNCTIONS //
const getWeather = require('././utils/helpers');



const weatherDisplay = document.querySelector('weatherDisplay')


fetch('/weather' + zipCode).then((response) => {
    response.json().then((data) => {
        if (data.error) {
           // some textContent here
        } else {
            // some textContent
        }
    })
})

document.querySelector('#new-new-weather-display')?document.querySelector('#new-weather-display').addEventListener('click', weatherDisplay):null;