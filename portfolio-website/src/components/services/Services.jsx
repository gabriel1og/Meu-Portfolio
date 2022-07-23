import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
import { GoRocket } from 'react-icons/go'

const Services = () => {
  return (
    <section id='services'>
      <h5>O que eu ofereço</h5>
      <h2>Serviços</h2>

      <div className="container services__container">

        <article className="service">
          <div className="service__head">
            <h3>Desenvolvimento Web</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Todo o front-end do seu sistema e-commerce.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ajustes e correções no front-end do seu sistema atual.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Criação de novas features e páginas no seu site.</p>
            </li>

            <li className='more'>
              <div>
                <GoRocket className='service__list-icon'/>
                <p>Em breve mais novidades e serviços...</p>
              </div>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services