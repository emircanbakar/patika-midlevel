import React, { useState } from 'react';

const CitySelector = ({ setSelectedCity }) => {
    const [city, setCity] = useState('');

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleCitySubmit = (e) => {
        e.preventDefault();
        setSelectedCity(city);
    };

    return (
        <form onSubmit={handleCitySubmit}>
            <label>
                Şehir:
                <input type="text" value={city} onChange={handleCityChange} />
            </label>
            <button type="submit">Şehri Değiştir</button>
        </form>
    );
};

export default CitySelector;