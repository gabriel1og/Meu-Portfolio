import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello, I'm</h5>
        <h1>Gabriel Gomide</h1>
        <h5 className="text-light">Frontend Developer</h5>

        <CTA />

        <div className="frsa">
          <HeaderSocials />

          <a href="#contact" className='scroll__down'>Go down</a>
        </div>

        
        
      </div>
    </header>
  )
}

export default Header