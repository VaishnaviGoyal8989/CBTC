document.getElementById('searchBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    if (city) {
        fetchWeather(city);
    }
});

function fetchWeather(city) {
    const apiKey = 'bd5e378503939ddaee76f12ad7a97608';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error('Error fetching weather data:', error));
}

function displayWeather(data) {
    if (data.cod === '404') {
        alert('City not found');
        return;
    }
    document.getElementById('cityName').innerText = data.name;
    document.getElementById('description').innerText = data.weather[0].description;
    document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C`;
    document.getElementById('humidity').innerText =`Humidity: ${data.main.humidity} %`;
    document.getElementById('wind').innerText =`Wind Speed: ${data.wind.speed} m/s`;
}