import axios from "axios";
import { useState, useEffect } from "react";
import "./style.css"
const Weather = () => {  // Corrected name to 'Weather'
    const[city,setCity]=useState(null);
    const [weather, setWeather] = useState(null);  // Corrected 'whether' to 'weather'
    const API_KEY = "36c90338e19665e2f767ef9251178007";
    

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then(response => setWeather(response.data))
            .catch(error => console.error("Error fetching weather:", error));
    }, [city]);  
    
const handleSubmit=(event)=>{
    event.preventDefault();
    setCity("");
  
}
const handleChange=(event)=>{
    setCity(event.target.value)
}
    return (
        <>
            <h1>WEATHER APP</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={city} onChange={handleChange} placeholder="Enter a city" ></input>
                <button>Find</button>
            </form>
            {weather ? (
                <div>
                    <h2>{weather.name}, {weather.sys.country}</h2>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Humidity: {weather.main.humidity}%</p>
                    <p>Weather: {weather.weather[0].description}</p>
                </div>
            ) : (
                <p>Select a place</p>
            )}
        </>
    );
};

export default Weather;
