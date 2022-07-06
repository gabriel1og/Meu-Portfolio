import React from 'react'
import './portfolio.css'
import p1 from '../../assets/JogoMemoria Projeto.png'
import p2 from '../../assets/IMC Projeto.png'
import p3 from '../../assets/p3.webp'

const data = [
  {
    id: 1,
    image: p1,
    title: 'Projeto - Jogo da Memória',
    github: 'https://github.com/gabriel1og/Memory-Game-Project',
    demo: '#'
  },
  {
    id: 2,
    image: p2,
    title: 'Projeto - Cálculo de IMC',
    github: 'https://github.com/gabriel1og/Projeto-Calculo-IMC',
    demo: '#'
  },
  {
    id: 3,
    image: p3,
    title: 'Projeto - Portal de Notícias',
    github: 'https://github.com/gabriel1og/Portal_Noticias',
    demo: '#'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Meus Projetos</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn git' target='_blank'>Github</a>
                  {/* <a href={demo} className='btn btn-primary' target='_blank'>Demonstração</a> */}
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