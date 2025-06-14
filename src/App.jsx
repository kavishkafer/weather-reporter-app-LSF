
import { getWeatherBackground } from "./utils/utils.js";
import { getWeatherByCity, getWeatherByCoordinates } from "./services/weatherService";
import {FaMapMarker, FaSearch, FaTemperatureLow} from "react-icons/fa";
import HourlyWeather from "./components/HourlyWeather.jsx";
import {useEffect, useState} from "react";
import {BsSun} from "react-icons/bs";
import {WiHumidity, WiStrongWind} from "react-icons/wi";

function App() {

    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState("Colombo"); // Default city
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchWeatherData(); // fetch on initial load
    }, []);
    const fetchWeatherData = async (customCity = city) => {
        setLoading(true);
        try {
            const data = await getWeatherByCity(customCity);
            if (data.error) {
                setError(data.error.message);
                setWeatherData(null);
            } else {
                setWeatherData(data);
                setError("");
            }
        } catch (error) {
            setError("Failed to fetch weather data. Please try again.");
            setWeatherData(null);
        } finally {
            setLoading(false);
        }
    };
    // Function to get current location weather
    const getCurrentLocation = () => {
        if (navigator.geolocation) {
            setLoading(true);
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    try {
                        const data = await getWeatherByCoordinates(latitude, longitude);
                        setWeatherData(data);
                        setCity(data.location.name);
                        setError("");
                    } catch (error) {
                        setError("Failed to fetch weather data for current location.");
                        setWeatherData(null);
                    } finally {
                        setLoading(false);
                    }
                },
                () => {
                    setError("Unable to retrieve your location. Please allow location access.");
                    setLoading(false);
                }
            );
        } else {
            setError("Geolocation is not supported by this browser.");
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            fetchWeatherData(); // Trigger search on Enter key press
        }
    }


    return (
        <div className={`min-h-screen flex items-center justify-center transition-all duration-700 ${weatherData ? getWeatherBackground(weatherData.current.condition.text) : "bg-default"}`}>


        {/*     Container*/}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg mt-10 p-6 rounded-2xl w-full max-w-sm text-white">


            <div className="flex">
                    <div className="flex border rounded items-center ml-6 w-full">
                        <input
                            type="text"
                            placeholder="Enter city"
                            value={city}
                            className="pl-2 pr-2 py-1 border-none focus:outline-none w-full"
                            onChange={(e) => setCity(e.target.value)}
                            onKeyUp={handleKeyPress}
                        />
                        <button
                            onClick={fetchWeatherData}
                            className="px-2 text-white-600 hover:text-gray-400"
                            title="Search"
                        >
                            <FaSearch className="h-5 w-5" />
                        </button>
                    </div>

                <button
                    onClick={getCurrentLocation}
                    className="px-3 py-2 bg-white/10 border border-white/30 text-white ml-2 rounded-full hover:bg-white/20 transition"
                    title="Use current location"
                >
                    <FaMapMarker className="w-5 h-5" />
                </button>
                </div>
                {/*Error message*/}
                {error && <p className="text-red-500 text-center text-sm mt-4">{error}</p>}

                {/*    weather data*/}
                {loading ? (
                    <div className="flex justify-center py-8">
                        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-white"></div>
                    </div>
                ) : weatherData && (
                    <div className="mt-4 text-center">
                        <h2 className="text-xl font-semibold">{weatherData.location.name}, {weatherData.location.country}</h2>
                        <img src={weatherData.current.condition.icon} alt="weather icon" className="mx-auto my-2 w-30 h-30" />
                        <p className="text-lg font-semibold">{weatherData.current.temp_c}°C</p>
                        <p className="text-sm capitalize font-semibold">{weatherData.current.condition.text}</p>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="flex items-center gap-2 text-sm">
                                <WiHumidity className="text-blue-500 text-xl" />
                                <span>Humidity: {weatherData.current.humidity}%</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <WiStrongWind style={{ color: 'white', filter: 'drop-shadow(0 0 2px #3b82f6)' }} className="text-xl" />
                                <span>Wind: {weatherData.current.wind_kph} kph</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <BsSun className="text-yellow-500 text-xl" />
                                <span>UV Index: {weatherData.current.uv}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <FaTemperatureLow className="text-red-400 text-xl" />
                                <span>Feels like: {weatherData.current.feelslike_c}°C</span>
                            </div>
                        </div>
                    </div>
                )}

                {weatherData?.forecast?.forecastday?.length > 0 && !loading && (
                    <HourlyWeather hourlyData={weatherData.forecast.forecastday[0].hour} />
                )}
            </div>
        </div>
    );
}

export default App
