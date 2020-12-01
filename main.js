const cityName = document.querySelector(".city-name");
const showBtn = document.querySelector(".show");
const cityWeather = document.querySelector(".city-weather");

showBtn.addEventListener("click", callWeather);

function callWeather() {
    let userInput = cityName.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=68488cda1533bcc90566d89f4e38f293`
    fetch(url)
        .then(function responseHandler(response) { return response.json() })
        .then(function logJSON(json) { console.log(json) 
        
            const clouds = json.clouds.all
            const temperature = json.main.temp
            // const feelsLike = json.main.feels_like
            // const minTemp = json.main.temp_min
            // const maxTemp = json.main.temp_max
            const city = json.name
            const country = json.sys.country
            const timeZone = json.sys.timezone
            const windSpeed = json.wind.speed
    
            console.log(json.main.temp)
            cityWeather.innerHTML += `
            <p>City: ${city}, ${country} <br>
            Cloud: ${clouds}&#37 <br>
            Temperature is ${Math.floor(temperature-273.5)}&deg C. <br>
            The wind speed is ${windSpeed} mph.
            </p>`
        })

}


/*
let url = "https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=68488cda1533bcc90566d89f4e38f293"
fetch(url)
    .then(function responseHandler(response) {
        return response.json()
    })
    .then(function logJSON(json) { console.log(json) })
*/