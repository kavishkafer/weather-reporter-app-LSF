import axios from 'axios';

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const WEATHER_API_URL = import.meta.env.VITE_WEATHER_API_URL;

export const getWeatherByCity = async (city) => {
    try {
        const response = await axios.get(`${WEATHER_API_URL}?key=${WEATHER_API_KEY}&q=${city}&days=1`);
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            return error.response.data;
        } else {
            return { error: { code: 5000, message: "Network error or server unavailable." } };
        }
    }
};


export const getWeatherByCoordinates = async (latitude, longitude) => {
    const response = await axios.get(`${WEATHER_API_URL}?key=${WEATHER_API_KEY}&q=${latitude},${longitude}&days=1`);
    return response.data;
};
