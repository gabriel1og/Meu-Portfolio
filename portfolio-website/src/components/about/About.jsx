import React from 'react'
import './about.css'
import eu from '../../assets/me.png'
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
              <small>Trabalhos Freelancer</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projetos</h5>
              <small>Disponíveis no meu GitHub</small>
            </article>
          </div>

          <p>
            Sou estudante de Engenharia de Software e programo há 2 anos. Em projetos 
            acadêmicos sempre fiquei responsável pelo front-end das aplicações desenvolvidas,
            portanto em projetos pessoais e no meu estágio atual também me dedico e tenho foco total
            no front-end dos sistemas que auxilio no desenvolvimento. Porém, não me limito à esta área e
            procuro expandir meus estudos/trabalhos ao UI/UX Design e back-end.
          </p>

          <a href="#contact" className='btn btn-primary ec'>Entre em contato</a>
        </div>
      </div> 
    </section>
  )
}

export default About