
const apiKey = "1a3a92fb9bb446f294f125218250610"
const weatherContainer = document.getElementById("weatherContainer");

const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const condition = document.getElementById("condition");

async function getWeather() {
    try {
        const cityInput = document.getElementById("cityInput").value;
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityInput}`);
        const data = await response.json(); 
        console.log(data);

        // Update the DOM with fetched data
        temperature.textContent = `${data.current.temp_f}°F`;
        humidity.textContent = `Humidity: ${data.current.humidity}%`;
        condition.textContent = `Condition: ${data.current.condition.text}`;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}
