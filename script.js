const api_key = "94676e7ece46fc69656ea62a8953cc22";
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBar = document.querySelector(".search-bar input")
const searchBtn = document.querySelector(".search-bar button")


async function getWeather(city) {
    const response = await fetch(api_url + city + `&appid=${api_key}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

}

searchBtn.addEventListener("click", ()=>{
    getWeather(searchBar.value);
});