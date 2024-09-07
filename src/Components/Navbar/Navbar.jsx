import React from 'react'
import './Navbar.scss';
import Navlogo from '../../assets/navbar-icon.svg'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
    <div className="navbar-logo">
      <img src={Navlogo} alt="Logo" />
      <h4>Black IN Dashboard</h4>
    </div>
        <Link className='navbar-button' to='/home'>Go TO Website</Link>
  </nav>  )
}
