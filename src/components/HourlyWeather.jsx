import React  from "react";
import sunny from '../assets/images/sun.png';

function HourlyWeather(){
    return (
        <div className="bg-white shadow-lg mt-4 p-4 rounded w-full max-w-sm">
            <h3 className="text-lg font-semibold mb-2">Hourly Forecast</h3>
            <div className="flex gap-6 mx-10 py-2 overflow-x-auto scrollbar-hide " style={{scrollBehavior:'smooth'}}>
                {Array.from({ length: 12 }, (_, index) => (
                    <div key={index} className="flex flex-col items-center bg-green-100 py-2 rounded px-6 min-w-[140px] ">
                        <p className="text-sm">{`${index + 1}:00 PM`}</p>
                        <img src={sunny} alt="weather icon" className="w-10 h-10"/>
                        <p className="text-sm">30°C</p>
                        <p className="text-sm">UV index: </p>
                        <p className="text-sm">Wind: </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HourlyWeather;