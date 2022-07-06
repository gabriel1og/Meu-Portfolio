import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/euu2.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Olá, eu sou o</h5>
        <h1>Gabriel OG</h1>
        <h5 className="text-light">Desenvolvedor Frontend</h5>

        <CTA />

        <div className="frsa">
          <HeaderSocials />

          <div className="me">
            <img src={me} alt="me" className='me-photo' />
          </div>

          <a href="#contact" className='scroll__down'>Arraste para baixo</a>
        </div>

        
        
      </div>
    </header>
  )
}

export default Header