const api_key = "94676e7ece46fc69656ea62a8953cc22";
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBar = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-bar button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherCard = document.querySelector(".weather-card");


async function getWeather(city) {
    const response = await fetch(api_url + city + `&appid=${api_key}`);
    var data = await response.json();
    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".description").style.display = "none";
    } else {
        //weather icon
        weatherIcon.src = "images/" + data.weather[0].icon + ".svg";

        //background color match to weather
        if(data.weather[0].main == "Clouds") {
            if(data.weather[0].icon.includes("d")) {
                weatherCard.style.background = "linear-gradient(135deg, #57a0ee, #c6deff)"; //cloudy day
            } else {
                weatherCard.style.background = "linear-gradient(135deg, #4286f4, #373B44)"; //cloudy night
            }
        } else if(data.weather[0].main == "Clear") {
            if(data.weather[0].icon.includes("d")) {
                weatherCard.style.background = "linear-gradient(135deg, #ee0979, #ff6a00, #f8b500)"; //clear day (bro i cant find any good gradients hnggg)
            } else {
                weatherCard.style.background = "linear-gradient(135deg, #0f0c29, #302b63, #24243e)"; //clear night
            }
        } else if(data.weather[0].main == "Rain") {
            weatherCard.style.background = "linear-gradient(135deg, #536976, #292E49)"; 
        } else if(data.weather[0].main == "Drizzle") {
            weatherCard.style.background = "linear-gradient(135deg, #606c88, #3f4c6b)";
        } else if(data.weather[0].main == "Mist") {
            weatherCard.style.background = "linear-gradient(135deg, #606c88, #3f4c6b)";
        } else if(data.weather[0].main == "Snow") {
            if(data.weather[0].icon.includes("d")) {
                weatherCard.style.background = "linear-gradient(135deg, #2C5364, #859398)"; //snow day
            } else {
                weatherCard.style.background = "linear-gradient(135deg, #141E30, #243B55)"; //snow night
            }
        }


        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        document.querySelector(".description").innerHTML = data.weather[0].description.toUpperCase();
        if(data.sys.country) {
            document.querySelector(".country").innerHTML = data.sys.country;
        } else {
            document.querySelector(".country").style.display = "none";
        }
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    }
}

searchBtn.addEventListener("click", ()=>{
    getWeather(searchBar.value);
});