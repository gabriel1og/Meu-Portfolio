import React from 'react'
import './about.css'
import eu from '../../assets/eu.jpeg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Me conheça</h5>
      <h2>Sobre mim</h2>

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
              <small>1 até o momento</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projetos</h5>
              <small>5 Completos</small>
            </article>
          </div>

          <p>
            Sou estudante de Engenharia de Software e programo há 2 anos. Em projetos 
            acadêmicos sempre fiquei responsável pelo front-end das aplicações desenvolvidas,
            portanto em projetos pessoais e no meu estágio atual também me dedico e tenho foco total
            no front-end dos sistemas que auxilio no desenvolvimento. Porém, não gosto de me acostumar
            e entrar na zona de conforto, por isso almejo adquirir novos conhecimentos em UI/UX Design e
            também no back-end.
          </p>

          <a href="#contact" className='btn btn-primary'>Entre em contato</a>
        </div>
      </div> 
    </section>
  )
}

export default About