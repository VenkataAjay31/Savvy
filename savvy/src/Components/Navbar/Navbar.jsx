import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar  ' >
      <span className="logo ">Savvy</span>
      <div className="nav-items "> 

      <Link  > <span>Home</span> </Link>
      <Link  > <span>Services</span> </Link>
      <Link  > <span>About Us</span> </Link>
      <Link  > <span>Contact Us</span> </Link>
      <Link to="/login" > <span>Login</span> </Link>

      </div>
    </div>
  )
}
