import React from 'react'
import Logo from '../../assets/images/Logo.png'
import './NavBar.scss'

const NavBar = () => {
    return (
        <nav className='NavBar'><img src={Logo} alt='' /> </nav>
    )
}

export default NavBar