import React from 'react'
import { Link } from 'react-router-dom'
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link className='logo' to="/"><FontAwesomeIcon className='logo' icon={faHouse} /></Link>
        <div className='categories'>
            <Link className='category' to="/">Enfant</Link>
            <Link className='category' to="/">Homme</Link>
            <Link className='category' to="/">Femmes</Link>
            <Link className='category' to="/" style={{color: 'darkred'}}>Promos</Link>
        </div>
        <div className='menu'>
            <Link><FontAwesomeIcon className='menu_c' icon={faBasketShopping} /></Link>
            <Link><FontAwesomeIcon className='menu_c' icon={faUser} /></Link>
            <Link><FontAwesomeIcon className='menu_c' icon={faHeart} /></Link>
        </div>
    </div>
  )
}

export default Navbar