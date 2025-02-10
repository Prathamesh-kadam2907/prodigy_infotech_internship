async function getWeather() {
    const location = document.getElementById("location").value;
    const apiKey = "1b1fabd84de1c737269ed53ab39d65f5"; // Replace with your OpenWeather API Key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === 200) {
            document.getElementById("weather-info").innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
        } else {
            document.getElementById("weather-info").innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        document.getElementById("weather-info").innerHTML = `<p>Error fetching data</p>`;
    }
}
