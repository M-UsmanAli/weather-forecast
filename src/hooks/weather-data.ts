import { useEffect, useState } from "react";
import weatherService from "../services/api-url";

const useWeatherData = (city: string) => {
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    const fetchWeatherData = async () => {
      if (city.trim() === "") return;
      try {
        const response = await weatherService.get(`?q=${city}`);
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setWeatherData(null);
      }
    };
    fetchWeatherData();
  }, [city]);

  return weatherData;
};
export default useWeatherData;
