import React from 'react'
import './Navbar.css'
import menu from '../../Assets/Icons/menu.svg'
import cross from '../../Assets/Icons/x.svg'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

export default function Navbar() {


  function openSidebar() {
    const element = document.getElementById('sidebar')
    element.style.transform = "translateX(0%)"
  }

  function closeSidebar() {
    const element = document.getElementById('sidebar')
    element.style.transform = "translateX(100%)"
  }


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

      <div className="drawer">
        <img src={menu} alt="" onClick={() => { openSidebar() }} />
        <div className="sidebar" id='sidebar' >
          <div className="cancel"><img onClick={() => { closeSidebar() }} src={cross} alt="" /></div>
          <Link  > <span>Home</span> </Link>
          <Link  > <span>Services</span> </Link>
          <Link  > <span>About Us</span> </Link>
          <Link  > <span>Contact Us</span> </Link>
          <Link to="/login" > <span>Login</span> </Link>
        </div>
      </div>

    </div>
  )
}
