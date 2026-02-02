import React from 'react'
import Search from "./Search"
import { FaShoppingCart } from "react-icons/fa";
import { NavLink, Routes } from 'react-router-dom'
import { IoIosMan } from "react-icons/io";
import Nobi from "../assets/Nobi.png"

const Navbar = () => {
  return (
   <div className=' flex justify-between bg-sky-600'>
        <NavLink to = "/"><img src={Nobi} alt="NobiCart" className=' w-10 h-10'/></NavLink>
        <NavLink to="/">Home</NavLink>
        <Search/>
        <NavLink to="/Products">Products</NavLink>
        <NavLink to="/"></NavLink>
        <NavLink to = "/YourCart"><FaShoppingCart className=' h-8 w-8'/></NavLink>
        <NavLink to = "Login" className="flex"> Login <IoIosMan className=' w-8 h-8'/></NavLink>

    </div>
  )
}

export default Navbar