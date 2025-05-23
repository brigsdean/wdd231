
const currentTemp = document.querySelector('#current-temp');
const captionDesc = document.querySelector('figcaption');
const currentWeatherIcon = document.querySelector('#current-weather-icon');

const forecastTemp = document.querySelector('#forecast-temp');
const weatherIcon = document.querySelector('#weather-icon');

// API
const currentWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat={61.59}&lon={149.11}&appid=308fa6eb026de3a268722d9e2a41414d';

const weatherForecastURL = 'https://api.openweathermap.org/data/2.5/weather?lat={61.59}&lon={149.11}&appid=308fa6eb026de3a268722d9e2a41414d';

// Asynchronous function using a try block
async function apiFetch() {
    // current weather API
    try {
        const response = await fetch(currentWeatherURL); // fetch data from API
        if (response.ok) {
            const data = await response.json(); // convert the data received to JSON
            console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

    // weather forecast API
    try {
        const response2 = await fetch(weatherForecastURL); // fetch data from API
        if (response2.ok) {
            const forecastData = await response2.json(); // convert the data received to JSON
            console.log(forecastData); // testing only
            displayForecast(forecastData); // uncomment when ready
        } else {
            throw Error(await response2.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

// Run the page locally and view the console output. 
// Find the current temperature (temp) and the weather 
// event description (weather.description), and image 
// icon reference (weather[0].icon - 3 characters) in 
// the data.

function displayResults(data) {
    // current weather
    currentTemp.innerHTML = '';
    currentTemp.innerHTML = `${data.main.temp}&deg;C (feels like ${data.main.feels_like}&deg;C)`; // show the temperature in degrees C

    let currentWeatherIconImage = document.createElement("img");
    let iconNumber = data.weather[0].icon; // current weather icon
    const iconsrc = `https://openweathermap.org/img/w/${iconNumber}.png`; // weather icon
    currentWeatherIconImage.setAttribute('src', `${iconsrc}`);
    currentWeatherIcon.setAttribute('alt', `${data.weather[0].description}`);

    let currentWeatherIconFigCaption = document.createElement("figcaption");
    currentWeatherIconFigCaption.textContent = `Expect ${data.weather[0].description}`;
    currentWeatherIcon.appendChild(currentWeatherIconImage);
    currentWeatherIcon.appendChild(currentWeatherIconFigCaption);
}


function displayForecast(forecastData) {
    // weather forecast
    forecastTemp.innerHTML = '';
    forecastTemp.innerHTML = `${forecastData.list[22].main.temp}&deg;C`;
    let forecastIconNumber = forecastData.list[22].weather[0].icon; // weather forecast icon
    const forecastIconSrc = `https://openweathermap.org/img/w/${forecastIconNumber}.png`; // weather forecast icon

    let weatherIconImage = document.createElement("img");
    weatherIconImage.setAttribute('src', `${forecastIconSrc}`);
    weatherIconImage.setAttribute('alt', `${forecastData.list[22].weather[0].description}`);

    let weatherIconFigCaption = document.createElement("figcaption");
    weatherIconFigCaption.textContent = `Expect ${forecastData.list[22].weather[0].description}`;

    weatherIcon.appendChild(weatherIconImage);
    weatherIcon.appendChild(weatherIconFigCaption);
}