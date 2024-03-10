import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Newsletter } from './Newsletter.jsx'
import Day3Header from './components/Day3Header.jsx'
import Day3Footer from './components/Day3Footer.jsx'
import './components/Day3ComponentS.scss'

function App() {

  return (
    <>
      <h1 style={{color: 'white'}}>Vite + React</h1>
      {/* <Newsletter /> */}
      <div className='blog-container'>
        <Day3Header/>
        <Day3Footer/>
      </div>
    </>
  )
}

export default App
