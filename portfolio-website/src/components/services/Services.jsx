import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
import { GoRocket } from 'react-icons/go'

const Services = () => {
  return (
    <section id='services'>
      <h5>What do I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Brand new e-commerce system's Frontend.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Adjustments and fixes on yours system's Frontend.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creation of new features and pages on your website.</p>
            </li>

            <li className='more'>
              <div>
                <GoRocket className='service__list-icon'/>
                <p>More services and news coming soon...</p>
              </div>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services