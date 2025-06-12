import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
    const apiUrl = import.meta.env.VITE_API_URL;
    const apiKey = import.meta.env.VITE_API_KEY;

  return (
    <>
   <div className="text-2xl">Weather app</div>
        <div className="text-3xl">{apiKey}</div>
    </>
  )
}

export default App
