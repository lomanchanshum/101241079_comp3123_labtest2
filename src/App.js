import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherComponent";

const API_KEY ="55164e21e1054953846edb371bbad2be";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;


function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fecthWeather = async (e) => {
    e.preventDefault();
    const  response = await
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      updateWeather(response.data)
  };

  return (
    <Container>
      <AppLabel>The Weather </AppLabel>
      {weather ? (
        <WeatherComponent weather = {weather}/>
      ) : (
      <CityComponent updateCity={updateCity} fecthWeather={fecthWeather}/>
      )}
      
    </Container>
  );
}

export default App;
