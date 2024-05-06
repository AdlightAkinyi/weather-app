document.addEventListener("DOMContentLoaded", function () {
    const apiKey = '7d367d37f38941f218d09e9e5ef5a765'; // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const cityElement = document.querySelector('.city');
    const tempElement = document.querySelector('.temperature');
    const descElement = document.querySelector('.description');
    const iconElement = document.querySelector('.icon');
    const searchBtn = document.getElementById('search-btn');
    const cityInput = document.getElementById('city-input');

    function fetchWeather(city) {
        const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                cityElement.textContent = data.name;
                tempElement.textContent = `${Math.round(data.main.temp)}°C`;
                descElement.textContent = data.weather[0].description;

                const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
                iconElement.innerHTML = `<img src="${iconUrl}" alt="Weather Icon">`;
            })
            .catch(error => console.log('Error fetching data:', error));
    }

    searchBtn.addEventListener('click', function () {
        const city = cityInput.value.trim();
        if (city) {
            fetchWeather(city);
            cityInput.value = ''; // Clear the input field after searching
        } else {
            alert('Please enter a city name');
        }
    });

    // Fetch weather for default city (London) on page load
    fetchWeather('Nairobi');
});




