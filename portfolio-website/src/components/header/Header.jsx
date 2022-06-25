import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello, I'm</h5>
        <h1>Gabriel OG</h1>
        <h5 className="text-light">Frontend Developer</h5>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={me} alt="me" />
        </div>
        
        <a href="#contact" className='scroll__down'>Arraste para baixo</a>
      </div>
    </header>
  )
}

export default Header