import React, {useRef} from "react";
import sunny from '../assets/images/sun.png';
import "./HourlyWeather.css";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

function HourlyWeather({hourlyData}){

    const scrollRef = useRef(null)
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -200,
                behavior: 'smooth'
            });
        }
    }
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 200,
                behavior: 'smooth'
            });
        }
    }
    return (
        <div className="relative bg-white shadow-lg mt-4 p-4 rounded w-full max-w-sm">
            <h3 className="text-lg font-semibold mb-2">Hourly Forecast</h3>
            <div ref={scrollRef} className="flex gap-6 mx-10 py-2 overflow-x-auto scrollbar-hide " style={{scrollBehavior:'smooth'}}>
                {hourlyData.map((hour, index) => (
                    <div key={index} className="flex flex-col items-center bg-green-100 py-2 rounded px-6 min-w-[140px] ">
                        <p className="text-sm">{hour.time.split(' ')[1]}</p>
                        <img src={hour.condition.icon || sunny} alt="weather icon" className="w-10 h-10" />
                        <p className="text-sm">{hour.temp_c}°C</p>
                        <p className="text-sm">UV index: {hour.uv}</p>
                        <p className="text-sm">Wind: {hour.wind_kph} kph</p>
                    </div>
                ))}


            </div>
            <button onClick={scrollLeft} className="absolute left-0 top-1/2 bg-green-500  text-white transform -translate-y-1/2 rounded-full w-8 h-8 flex items-center justify-center"><FaChevronLeft className="w-4 w-4"/></button>
            <button onClick={scrollRight} className="absolute right-0 top-1/2 bg-green-500  text-white transform -translate-y-1/2 rounded-full w-8 h-8 flex items-center justify-center"><FaChevronRight className="w-4 w-4"/></button>
        </div>
    );
}

export default HourlyWeather;