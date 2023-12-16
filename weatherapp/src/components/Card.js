import React from 'react'
import { useWeather } from '../context/WeatherContext'

function Card() {
    const { weatherData } = useWeather();

    if (!weatherData) {
        return <div>Hava durumu bilgisi bulunamadı.</div>;
    }
    return (
        <div className="weather-card-container">
            {weatherData.list.map((dailyData, index) => (
                <div key={index} className="weather-card">
                    <p>{getDayOfWeek(dailyData.dt)}</p>
                    <img
                        src={`http://openweathermap.org/img/w/${dailyData.weather[0].icon}.png`}
                        alt={dailyData.weather[0].description}
                    />
                    <p>{dailyData.weather[0].description}</p>
                    <p>En Yüksek: {(dailyData.main.temp_max)}°C</p>
                    <p>En Düşük: {(dailyData.main.temp_min)}°C</p>
                </div>
            ))}
        </div>
    )
}
const getDayOfWeek = (unixTimestamp) => {
    const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    const date = new Date(unixTimestamp * 1000);
    return days[date.getDay()];
};

export default Card
