import { Grid, GridItem } from '@chakra-ui/react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';
import WeatherData from './components/WeatherData';
import useWeatherData from './hooks/weather-data';

function App() {
  const [city, setCity] = useState<string>('');


  const weatherData = useWeatherData(city)

  const handleFormSubmit = (data: { weather: string }) => {
    setCity(data.weather);
  };

  return (
    <div className='app-container'>
      <Grid
        templateAreas={{
          base: `"nav" "aside" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>

        <GridItem area="aside" paddingX={5}>
          <SearchForm onSubmit={handleFormSubmit} />
        </GridItem>

        <GridItem area="main">
          <WeatherData weatherData={weatherData} />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
