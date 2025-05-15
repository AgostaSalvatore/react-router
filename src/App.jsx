import React from 'react'
//import axios
import axios from 'axios'
//impost useState useEffect
import { useState, useEffect } from 'react'
//import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
//import Routers
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//import all pages
import Homepage from './pages/Homepage'
import AboutUs from './pages/AboutUs'
import Characters from './pages/Characters'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Homepage} />
          <Route path='/characters' Component={Characters} />
          <Route path='/about_us' Component={AboutUs} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
