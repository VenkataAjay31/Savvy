import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar  ' >
      <span className="logo ">Savvy</span>
      <div className="nav-items "> 

        <span>Home</span>
        <span>Services</span>
        <span>About Us</span>
        <span>Contact Us</span>
        <span>Login</span>

      </div>
    </div>
  )
}
