// API details
const apiKey = "355d9e644cf90d4bdf448e35f9831824"; // Replace with your API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

document.getElementById("searchBtn").addEventListener("click", () => {
  const city = document.getElementById("city").value.trim();
  if (city) {
    fetchWeather(city);
  } else {
    alert("Please enter a city name.");
  }
});

async function fetchWeather(city) {
  try {
    console.log("Fetching weather for:", city); // Debugging line
    const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
    
    if (!response.ok) {
      throw new Error("City not found. Please check the name.");
    }

    const data = await response.json();
    console.log("Weather data received:", data); // Debugging line
    updateUI(data);

  } catch (error) {
    console.error("Error fetching data:", error); // Debugging line
    alert(error.message);
  }
}

function updateUI(data) {
  document.getElementById("city-name").textContent = data.name;
  document.getElementById("temperature").innerHTML = `${Math.round(data.main.temp)}°C`;
  document.getElementById("weather-desc").textContent = data.weather[0].description;
  // document.getElementById("weather-icon").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}
