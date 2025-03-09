const api_key = "94676e7ece46fc69656ea62a8953cc22";
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBar = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-bar button");
const weatherIcon = document.querySelector(".weather-icon");


async function getWeather(city) {
    const response = await fetch(api_url + city + `&appid=${api_key}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
    } else if(data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
    } else if(data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
    } else if(data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    } else if(data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
    }
}

searchBtn.addEventListener("click", ()=>{
    getWeather(searchBar.value);
});