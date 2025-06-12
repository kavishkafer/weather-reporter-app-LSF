// import './App.css'
// import './index.css'

import {FaMapMarker, FaSearch} from "react-icons/fa";
import sunny from './assets/images/sun.png';
import HourlyWeather from "./components/HourlyWeather.jsx";

function App() {

    return (
        <div className="bg-gray-800 min-h-screen flex items-center justify-center ">
            {/*     Container*/}
            <div className="bg-white shadow-lg mt-10 p-4 rounded w-full max-w-sm">
                <div className="flex">
                    <div className="flex border rounded items-center ml-6">
                        <FaSearch className="h-5 w-5"/>
                        <input type="text" placeholder="enter city" className="pl-2 border-none focus:outline-none w-full">

                        </input>
                    </div>
                    {/*current location*/}
                    <button className="px-4 py-2 bg-green-500 text-green-100 ml-2 rounded hover:bg-green-600">
                        <FaMapMarker className="w-5 h-5"/>

                    </button>
                </div>
            {/*    weather data*/}
                <div className="mt-4 text-center">
                    <h2 className="text-xl font-semibold">Colombo</h2>
                    <img src={sunny} alt="weather icon" className="mx-auto my-2 w-30 h-30"/>
                    <p className="text-lg font-semibold">29 C</p>
                    <p className="text-sm capitalize font-semibold">Cloudy</p>
                    <p className="text-sm">Humidity: 70%</p>
                    <p className="text-sm">Wind: 10 km/h</p>
                    <p className="text-sm">UV Index: 10 km</p>

                    </div>
                {/*Hourly Weather*/}
                <HourlyWeather/>
            </div>
        </div>
    )
}

export default App
