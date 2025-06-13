// import './App.css'
// import './index.css'

import {FaMapMarker, FaSearch} from "react-icons/fa";
import HourlyWeather from "./components/HourlyWeather.jsx";
import axios from 'axios';
import {useEffect, useState} from "react";

function App() {
const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const WEATHER_API_URL = import.meta.env.VITE_WEATHER_API_URL;
    // Function to fetch weather data

    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState("Colombo"); // Default city
    const [error, setError] = useState("");
    useEffect(() => {
        fetchWeatherData(); // fetch on initial load
    }, []);
    const fetchWeatherData = async () => {
        try {
            const response = await axios.get(`${WEATHER_API_URL}?key=${WEATHER_API_KEY}&q=${city}&days=1`);
            setWeatherData(response.data);

        } catch (error) {
            console.error("Error fetching weather data:", error);
            throw error;
        }
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            fetchWeatherData(); // Trigger search on Enter key press
        }
    }


    return (
        <div className="bg-gray-800 min-h-screen flex items-center justify-center ">
            {/*     Container*/}
            <div className="bg-white shadow-lg mt-10 p-4 rounded w-full max-w-sm">
                <div className="flex">
                    <div className="flex border rounded items-center ml-6">
                        <FaSearch className="h-5 w-5"/>
                        <input type="text" placeholder="enter city" value={city} className="pl-2 border-none focus:outline-none w-full" onChange={(e)=>setCity(e.target.value)} onKeyUp={handleKeyPress}>

                        </input>
                    </div>
                    {/*current location*/}
                    <button className="px-4 py-2 bg-green-500 text-green-100 ml-2 rounded hover:bg-green-600">
                        <FaMapMarker className="w-5 h-5"/>

                    </button>
                </div>
            {/*    weather data*/}
                {weatherData &&
                <div className="mt-4 text-center">
                    <h2 className="text-xl font-semibold">{weatherData.location.name}</h2>
                    <img src={weatherData.current.condition.icon} alt="weather icon" className="mx-auto my-2 w-30 h-30"/>
                    <p className="text-lg font-semibold">{weatherData.current.temp_c}C</p>
                    <p className="text-sm capitalize font-semibold">Cloudy</p>
                    <p className="text-sm">Humidity: {weatherData.current.humidity}%</p>
                    <p className="text-sm">Wind: {weatherData.current.wind_kph} km/h</p>
                    <p className="text-sm">UV Index: {weatherData.current.uv}</p>

                    </div>
                }
                {/*Hourly Weather*/}
                {weatherData?.forecast?.forecastday?.length > 0 && (
                <HourlyWeather hourlyData={weatherData.forecast.forecastday[0].hour}/>
                )}
            </div>
        </div>
    )
}

export default App
