import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Slider from './Components/Slider/Slider'
import Nosotros from './Components/Nosotros/Nosotros'
import Equipo from './Components/Equipo/Equipo'

function App() {
 

  return (
    <>
      <Header/>
      <Slider />
      <Nosotros />
      <Equipo/>
      </>
  )
}

export default App
