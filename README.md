# 🌤️ Weather Reporter App

A sleek and responsive weather application built with **React**, **Vite**, and **Tailwind CSS**. This app allows users to check the current weather conditions and hourly forecasts for any city or their current location, using the [WeatherAPI](https://www.weatherapi.com/).

## 🚀 Features

- 🔍 Search weather by city
- 📍 Get weather based on current geolocation
- 🌡️ View temperature, weather conditions, humidity, wind speed, UV index, and feels-like temperature
- ⏱️ Hourly forecast for the current day
- 🌇 Dynamic background based on weather conditions
- 🧊 Smooth glassmorphism UI using Tailwind CSS



## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [WeatherAPI](https://www.weatherapi.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## 🧪 Local Development

### 📦 Prerequisites

- Node.js >= 16
- Vite
- WeatherAPI key

### 📁 Installation

```bash
# Clone the repository
git clone https://github.com/kavishkafer/weather-reporter-app-LSF.git
cd weather-reporter-app-LSF

# Install dependencies
npm install

# Create your environment variables
cp .env.example .env
# Then edit .env and set your WeatherAPI key:
# VITE_WEATHER_API_KEY=your_api_key
# VITE_WEATHER_API_URL=https://api.weatherapi.com/v1/forecast.json

# Run the development server
npm run dev
