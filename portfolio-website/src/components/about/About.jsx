import React from 'react'
import './about.css'
import eu from '../../assets/me.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Know me</h5>
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
              <h5>Experience</h5>
              <small>1 year as Fullstack developer</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Freelancer Jobs</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>Available on my GitHub</small>
            </article>
          </div>

          <p>
            I'm a Software Engineer and in touch with programming about almost 4 years. In academic projects, 
            I've always been responsible for developed softwares Frontend, therefore in personal projects and in my 
            internship I also look for learning more and work hard on this development area. But, on the other hand I don't
            limit my knowledge on Frontend and try to know and learn more about UI/UX, Backend and Cloud/Architecture concepts too.
          </p>

          <a href="#contact" className='btn btn-primary ec'>Get in touch</a>
        </div>
      </div> 
    </section>
  )
}

export default About