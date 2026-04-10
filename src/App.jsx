import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Recomendados from './Componets/Recomendados'
import Ubicacion from './Componets/Ubicacion'
import Footer from './Componets/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Recomendados/>
      
       <Ubicacion/>
       <Footer/>
    </>
   
  )
}

export default App
