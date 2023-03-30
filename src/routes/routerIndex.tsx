import React from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Footer from '../components/Layout/Footer'
import NavBar from '../components/Layout/NavBar'
import Home from '../pages/Home'

const RouterIndex = () => {
  return (
    <BrowserRouter>

        <NavBar/>

        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>

        <Footer/>
        
    </BrowserRouter>
  )
}

export default RouterIndex