import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/arraystate">ArrayState</Link>
      <Link to="/form">Form</Link>
      <Link to="/formexercice">Form Exercice</Link>
      <Link to="/lifecycle">Life Cycle</Link>
    </div>
  )
}

export default Navbar