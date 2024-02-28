// App.tsx

import { Grid, GridItem, Show } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';
import WeatherData from './components/WeatherData';
import axios from 'axios';

function App() {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<any>(null);
  const API_KEY = "12c921a9e9afc528a31a71c073a90caa"

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (city.trim() === '') return; // Skip if city is empty
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setWeatherData(null); // Reset weatherData state to indicate error
      }
    };

    fetchWeatherData();
  }, [city]);

  const handleFormSubmit = (data: { weather: string }) => {
    setCity(data.weather);
  };

  return (
    <div className='app-container'>
      <Grid
        templateAreas={{
          base: `"nav" "aside main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <SearchForm onSubmit={handleFormSubmit} />
          </GridItem>
        </Show>
        <GridItem area="main">
          <WeatherData weatherData={weatherData} />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
