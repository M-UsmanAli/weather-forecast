// services/weatherService.js
import axios from "axios";

const weatherService = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather",
  params: {
    appid: "12c921a9e9afc528a31a71c073a90caa" // Move API key to params
  }
});

export default weatherService;
