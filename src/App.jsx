
import './App.css'
import { useState, useEffect } from 'react'
import { leerDatosyRetornar } from './services/api.js'
import { Home } from './pages/Home'
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


    <Home/>
    <Footer/>

 
    
    </>
   
  )
}

export default App
