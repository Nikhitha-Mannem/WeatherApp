let inputed_city = document.getElementById("city");
let form = document.querySelector("form");
let temp = document.querySelector(".temp");
let city_name = document.querySelector(".city_name");
let climate_info = document.querySelector(".climate_info");
let humidity = document.querySelector(".humidity");
let windspeed = document.querySelector(".windspeed");
let weather_display=document.querySelector('.weather_display');

const apikey = '65aa6265fd1cccb2ab5820cd840f6c61';

function displayWeather(city) {

    var weatherinfo = fetch(`http://api.weatherstack.com/current?access_key=${apikey}&query=${city}`)
        .then(response => {
            return response.json()
        }).then(data => {
            console.log(data);
            if (data.success === false) {
                alert("City not found. Please try again.");
                return;
            }
            else {
                city_name.textContent = data.location.name;
                temp.textContent = `${data.current.temperature}°C`;
                climate_info.textContent = data.current.weather_descriptions[0];
                humidity.textContent = `Humidity: ${data.current.humidity}%`;
                windspeed.textContent = `Wind Speed: ${data.current.wind_speed} km/h`;
                inputed_city.value=""
                weather_display.style.display='block';
            }
            

        })
        .catch(err => {
            console.log(err);
            alert("Unable to fetch weather data. Please check the city name or try again later.");
        })
}
form.addEventListener("submit", (event => {
    event.preventDefault();
    var city = inputed_city.value.trim().toLowerCase();
    displayWeather(city);
}))




