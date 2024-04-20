import axios from "axios";

export const weatherData = async () => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=Korea&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  );
  return data;
};
