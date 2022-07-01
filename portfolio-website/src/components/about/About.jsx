import React from 'react'
import './about.css'
import eu from '../../assets/eu.jpeg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={eu} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experiência</h5>
              <small>1 ano como dev front-end</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small>2 autônomos</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projetos</h5>
              <small>4 Completos</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aut, harum? Aperiam impedit maxime molestias, nulla iusto
            dolores? Laudantium voluptates, reprehenderit voluptate 
            quidem quisquam fugit debitis beatae! Ipsam inventore sed
            suscipit?
          </p>

          <a href="#contact" className='btn btn-primary'>Entre em contato</a>
        </div>
      </div> 
    </section>
  )
}

export default About