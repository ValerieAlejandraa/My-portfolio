import React from 'react'
import './header.css'
import CTA from './CTA'
const Header = () => {
  return (
    <header>
        <div className="container header__container"></div>
        <h5>Hello I'm</h5>
        <h1>Valerie Perez</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
    </header>
  )
}

export default Header;