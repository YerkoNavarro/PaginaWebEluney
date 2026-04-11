
import './App.css'
import { Home } from './pages/Home'
import Recomendados from './Componets/Recomendados'
import Ubicacion from './Componets/Ubicacion'
import Footer from './Componets/Footer'
import Navbar from './Componets/Navbar'

import { useEffect, useState } from 'react';
import { leerDatosyRetornar } from './services/api';

function App() {
  
  const [rows, setRows] = useState([]);
  useEffect(() => {
    leerDatosyRetornar().then((data) => {
      if (data) setRows(data);
    });
  }, []);
  return (
    <>
    <Navbar/>
    <Home rows={rows}/>
    <Recomendados/>
    <Ubicacion/>
    <Footer/>
    </>
   
  )
}

export default App
