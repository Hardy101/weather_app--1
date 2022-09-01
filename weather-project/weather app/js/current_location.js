const API_KEY = "eccf76524d9ba7802d75ac6ff7759d06";

class currentLocation {
  location = {
    state: "",
    country: "",
  };
  currentWeather = {
    temp: {
      high: null,
      avg: null,
      low: null,
    },
    icon: "",
    desc: "",
    wind: null,
    rain: null,
    sunrise: null,
    sunset: null,
  };
  hourlyWeather = {
    time: "",
    temp: "",
  };
  setCurrentWeather = async (lat, lon) => {
    try {
      const weatherData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );
      const { main, weather, rain, sys, wind } = await weatherData.json();
      this.currentWeather = {
        temp: {
          high: main.temp_max,
          low: main.temp_min,
          avg: main.temp,
        },
        icon: weather[0].icon,
        desc: weather[0].description,
        wind: wind.speed,
        rain: rain["1h"],
        sunrise: sys.sunrise,
        sunset: sys.sunset,
      };
    } catch (err) {
      //   console.log(":( sorry, an error has occured...");
      console.log(err);
    }
  };
}

export default currentLocation;
