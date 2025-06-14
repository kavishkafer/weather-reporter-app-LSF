import React, {useRef} from "react";
import cloudyandrain  from "/public/cloudyandrain.png"
import "./HourlyWeather.css";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

function HourlyWeather({hourlyData}){

    const scrollRef = useRef(null)
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -160,
                behavior: 'smooth'
            });
        }
    }
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 160,
                behavior: 'smooth'
            });
        }
    }
    return (
        <div className="relative bg-white/10 backdrop-blur-md border border-white/20 shadow-lg mt-4 p-4 rounded-2xl w-full max-w-sm text-white">

        <h3 className="text-lg font-semibold mb-2">Hourly Forecast</h3>
            <div ref={scrollRef} className="flex gap-6 mx-10 py-2 overflow-x-auto scrollbar-hide " style={{scrollBehavior:'smooth'}}>
                {hourlyData.map((hour, index) => (
                    <div key={index} className="flex flex-col items-center bg-white/10 rounded p-4 min-w-[140px]">
                        <p className="text-sm">{hour.time.split(' ')[1]}</p>
                        <img src={hour.condition.icon || cloudyandrain} alt="weather icon" className="w-10 h-10" />
                        <p className="text-sm">{hour.temp_c}°C</p>
                        <div className="text-left w-full ml-3">

                        <p className="text-sm">UV index: {hour.uv}</p>
                        <p className="text-sm">Wind: {hour.wind_kph} kph</p>
                        </div>
                    </div>
                ))}


            </div>
            <button onClick={scrollLeft} className="absolute left-0 top-1/2 bg-white/20 border border-white/30 text-white transform -translate-y-1/2 rounded-full w-8 h-8 flex items-center justify-center hover:bg-white/30 transition"><FaChevronLeft className="w-4 w-4"/></button>
            <button onClick={scrollRight} className="absolute right-0 top-1/2 bg-white/20 border border-white/30 text-white transform -translate-y-1/2 rounded-full w-8 h-8 flex items-center justify-center hover:bg-white/30 transition"><FaChevronRight className="w-4 w-4"/></button>
        </div>
    );
}

export default HourlyWeather;