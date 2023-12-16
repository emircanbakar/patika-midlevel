const API_KEY = "1d3c7c7a4530ae6967e5ac100b1d543e";

const Api = async (lat, lon, part = "current") => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${API_KEY}`);
    const data = await response.json();
    return data;
};

export default Api;
