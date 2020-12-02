const cityName = document.querySelector(".city-name");
const showBtn = document.querySelector(".show");
const cityWeather = document.querySelector(".city-weather");
const tokyo = document.querySelector(".tokyo-weather");
const apiKey = "68488cda1533bcc90566d89f4e38f293";


window.addEventListener("load", tokyoWeather);

function tokyoWeather(){
    const tokyoURL = `https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=${apiKey}`
    fetch(tokyoURL)
    .then(function tokyoResponse(res){return res.json()})
    .then(function logTokyo(tokyoRes){console.log(tokyoRes)
        const cloudsTokyo = tokyoRes.clouds.all;
        const temperatureTokyo = tokyoRes.main.temp;
        const cityTokyo = tokyoRes.name;
        const windSpeedTokyo = tokyoRes.wind.speed;

        tokyo.innerHTML += `<p><span style="color: #2ed573;">${cityTokyo}</span> is <span style="color: #0652DD;">${cloudsTokyo}&#37 cloudy</span> and temperature is <span>${Math.floor(temperatureTokyo - 273.5)}&degC</span> with the wind speed of <span>${windSpeedTokyo} mph</span>.</p>`
    })
}

showBtn.addEventListener("click", callWeather);

function callWeather() {
    let userInput = cityName.value;
    // const apiKey = "68488cda1533bcc90566d89f4e38f293";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}`;
    fetch(url)
        .then(function weatherResponse(response) { return response.json() })
        .then(function logJSON(json) {
            console.log(json);

            const clouds = json.clouds.all;
            const temperature = json.main.temp;
            const city = json.name;
            const country = json.sys.country;
            const windSpeed = json.wind.speed;
            const codStatus = json.cod;

            // console.log(json.main.temp)
            cityWeather.innerHTML += `
            <p class="weather">City: ${city}, ${country} <br>
            Cloud: ${clouds}&#37 <br>
            Temperature is ${Math.floor(temperature - 273.5)}&degC. <br>
            The wind speed is ${windSpeed} mph.
            </p>`;
            return (cityName.value = "")
            console.log();
        }).catch(function errorHandling(error) {
            alert("Enter a valid city name")
            cityWeather.innerHTML += `<p class="invalid">Invalid Input, Enter a proper city name!</p>`
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