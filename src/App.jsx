import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { home } from './pages/Home'
import Recomendados from './Componets/Recomendados'
import Navbar from './Componets/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Recomendados/>
      
    </>
  )
}

export default App
