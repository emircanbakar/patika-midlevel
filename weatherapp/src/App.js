import { WeatherProvider } from './context/WeatherContext';
import Api from './context/Api';
import CitySelector from './components/CitySelector';
import { useState, useEffect } from "react"
import Card from './components/Card';
import './App.css';

function App() {
  const [selectedCity, setSelectedCity] = useState('Istanbul');

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await Api(selectedCity);
    };

    fetchWeather();
  }, [selectedCity]);

  return (
    <div className="App">
      <WeatherProvider selectedCity={selectedCity} setSelectedCity={setSelectedCity}>
        <div>
          <h2> Hava Durumu </h2>
          <CitySelector setSelectedCity={setSelectedCity}>
            <Card />
          </CitySelector>
        </div>
      </WeatherProvider>
    </div>
  );
}

export default App;
