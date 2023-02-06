import React from 'react'
import './portfolio.css'
import p1 from '../../assets/CRUD Project.png'
import p2 from '../../assets/FinancesManagement.png'
import p3 from '../../assets/JogoMemoria Projeto.png'
import p4 from '../../assets/IMC Projeto.png'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { SiTypescript, SiStyledcomponents } from 'react-icons/si'

const data = [
  {
    id: 1,
    image: p1,
    title: 'Project - CRUD',
    github: 'https://github.com/gabriel1og/CRUD-System',
    demo: 'https://crud-system-henna.vercel.app/',
    languages: [<FaReact size={30} />, <FaNodeJs size={30} />]
  },
  {
    id: 2,
    image: p2,
    title: 'Project - Finances Management',
    github: 'https://github.com/gabriel1og/Finances-Management',
    demo: 'https://finances-management-beta.vercel.app/',
    languages: [<FaReact size={30} />, <SiTypescript size={30} />, <SiStyledcomponents size={36}/>]
  },
  {
    id: 3,
    image: p3,
    title: 'Project - Memory Game',
    github: 'https://github.com/gabriel1og/Memory-Game-Project',
    demo: 'https://memory-game-project-mu.vercel.app/',
    languages: [<FaReact size={30} />, <SiTypescript size={30} />,  <SiStyledcomponents size={36} />]
  },
  {
    id: 4,
    image: p4,
    title: 'Project - BMI calculation',
    github: 'https://github.com/gabriel1og/Projeto-Calculo-IMC',
    demo: 'https://projeto-calculo-imc.vercel.app/',
    languages: [<FaReact size={30} />, <SiTypescript size={30} />]
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo, languages}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>

                <div className='portfolio__item-title'>
                  <h3>{title}</h3>
                  <div className="languages">
                    {languages}
                  </div>
                </div>
              
                <div className="portfolio__item-cta">
                  <a href={github} className='btn git' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
