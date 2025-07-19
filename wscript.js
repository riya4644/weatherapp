async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "4cf0c94bfc0dea2f4de644222c6751ed"; // Replace this with your actual OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");
  
      const data = await response.json();
      document.getElementById("weatherResult").innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>🌡️ Temperature: ${data.main.temp} °C</p>
        <p>🌬️ Wind Speed: ${data.wind.speed} m/s</p>
        <p>☁️ Condition: ${data.weather[0].main}</p>
      `;
    } catch (error) {
      document.getElementById("weatherResult").innerHTML = `<p>${error.message}</p>`;
    }
  }
  