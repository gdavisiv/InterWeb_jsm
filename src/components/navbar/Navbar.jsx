import React from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import logo from '../../assets/logo.svg'
import './navbar.css';

//BEM -> Block Element Modifier
const Navbar = () => {
  return (
    <div className="3dm__navbar">
      <div className="3dm__navbar-links">
        <div className="3dm__navbar-links_logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  )
}

export default Navbar