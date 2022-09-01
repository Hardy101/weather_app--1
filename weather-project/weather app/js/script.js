import currentLocation from "./current_location.js";

const location = new currentLocation();

const getDeviceLocation = () => {
  // check if the browser supports geolocation
  if (!navigator.geolocation) {
    console.log(":( sorry, your broswer doesnt support geolocation");
    return;
  }
  // Gets device current location
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
};

const geoSuccess = async (locationData) => {
  const {
    coords: { latitude, longitude },
  } = locationData;
  await location.setCurrentWeather(latitude, longitude);
  console.log(locationData);
};

const geoError = (err) => {
  console.log(err);
};

getDeviceLocation();
// const getCurrentWeatherData = async () => {
//   const weatherData = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?lat=6.543810&lon=5.898714&appid=${API_KEY}`
//   );
//   const data = await weatherData.json();
//   console.log(data);
//   console.log(
//     `State : ${data.name} State, latitude: ${data.coord.lat}, longitude: ${
//       data.coord.lon
//     }, Temperature: ${Math.floor(data.main.temp - 273)}, Humidity : ${
//       data.main.humidity
//     }%`
//   );
// };

// getCurrentWeatherData();
