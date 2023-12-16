import React from 'react'
import { useState, useContext, createContext } from "react"

const WeatherContext = createContext()

export const useWeather = () => {
    return useContext(WeatherContext)
}

export const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState("")
    const updateWeatherData = (data) => setWeatherData(data)
    return (
        <WeatherContext.Provider value={{ weatherData, updateWeatherData }}>
            {children}
        </WeatherContext.Provider>
    )
}
export default WeatherContext
