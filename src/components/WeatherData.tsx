import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

interface WeatherDataProps {
    weatherData: any;
}

const WeatherData: React.FC<WeatherDataProps> = ({ weatherData }) => {
    if (weatherData === null) {
        return <div>Please Enter Valid City</div>;
    }

    const temperatureCelsius = (weatherData.main.temp - 273.15).toFixed(2);
    const windSpeed = weatherData.wind.speed;
    const humidity = weatherData.main.humidity;
    const weatherDescriptions = weatherData.weather.map((item: any) => item.description).join(', ');
    const iconCode = weatherData.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
    const sunriseTime = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString();

    return (
        <div>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} spacing={4} padding='10px'>
                <Box backgroundColor="rgba(255, 255, 255, 0.5)" padding='20px' borderRadius='10px'>
                    <Text fontSize='2xl'>City:</Text>
                    <Text fontSize='2xl'>{weatherData.name}</Text>
                </Box>
                <Box backgroundColor="rgba(255, 255, 255, 0.5)" padding='20px' borderRadius='10px'>
                    <Text fontSize='2xl'>Temperature:</Text>
                    <Text fontSize='2xl'>{temperatureCelsius}°C</Text>
                </Box>
                <Box backgroundColor="rgba(255, 255, 255, 0.5)" padding='20px' borderRadius='10px'>
                    <Text fontSize='2xl'>Wind Speed: </Text>
                    <Text fontSize='2xl'>{windSpeed} m/s</Text>
                </Box>
                <Box backgroundColor="rgba(255, 255, 255, 0.5)" padding='20px' borderRadius='10px'>
                    <Text fontSize='2xl'>Humidity:</Text>
                    <Text fontSize='2xl'>{humidity}%</Text>
                </Box>
                <Box backgroundColor="rgba(255, 255, 255, 0.5)" padding='20px' borderRadius='10px'>
                    <Text fontSize='2xl'>Weather Condition:</Text>
                    <Text fontSize='2xl'>{weatherDescriptions}</Text>
                </Box>
                <Box backgroundColor="rgba(255, 255, 255, 0.5)" padding='20px' borderRadius='10px'>
                    <Text fontSize='2xl'>Sun-Rise:</Text>
                    <Text fontSize='2xl'>{sunriseTime}</Text>
                </Box>
                <Box backgroundColor="rgba(255, 255, 255, 0.5)" padding='20px' borderRadius='10px'>
                    <Text fontSize='2xl'>Sun-Set:</Text>
                    <Text fontSize='2xl'>{sunsetTime}</Text>
                </Box>
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '20px', borderRadius: '10px' }}>
                    <Image src={iconUrl} alt="Weather Icon" boxSize='150px' />
                </div>
            </SimpleGrid>
        </div>
    );
};

export default WeatherData;
