let userLocation = {
    lat: 35.7279358,
    lng: 51.327602399999996
};

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        userLocation.lat = position.coords.latitude;
        userLocation.lng = position.coords.longitude;
    });
}

const weatherIcons = {
    "01d": 'sun-1',
    "01n": '021-night-1',
    "02d": 'sun-1',
    "02n": '021-night-1',
    "03d": 'sun-1',
    "03n": '021-night-1',
    "04d": 'sun-1',
    "04n": '021-night-1',
    "09d": '021-rain-1',
    "09n": '021-rain-2',
    "10d": '021-rain-1',
    "10n": '021-rain-2',
    "11d": 'storm',
    "11n": 'storm-1',
    "13d": '021-snowing-3',
    "13n": '021-snowing-3',
    "50d": 'windy',
    "50n": 'windy-1'
};

const updateUiWithWeatherInfo = (weatherInfo, temp) => {
    $('.js-temp').text( Math.round(+temp - 273.15));
    $('.js-weather-desc').text(weatherInfo.description);

    const imagePath = `https://me-majidi.github.io/todo/assets/weather/${weatherIcons[weatherInfo.icon]}.svg`;
    $('.js-weather-icon').attr('src', imagePath);
};

const removeApplicationLoader = () => {
    $('.js-app-loader').remove();
};

$.ajax({
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${userLocation.lat}&lon=${userLocation.lng}&appid=c13a6cbf1653ca5db80232519d6cd009`})
    .done(function(res) {
        const weatherInfo = res.weather.length ? res.weather[0] : null;
        updateUiWithWeatherInfo(weatherInfo, res.main.temp);
        removeApplicationLoader();
    });