import React from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Component/Home'
import Products from './Component/Products'
import Login from './Component/Login'
import Cart from './Component/Cart'
import { useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  return (
    <div className='bg-blue-950 w-screen h-screen'>
     {pathname === "/" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products/>} />
        <Route path="/login" element={<Login />} />
          <Route path="/YourCart" element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default App
