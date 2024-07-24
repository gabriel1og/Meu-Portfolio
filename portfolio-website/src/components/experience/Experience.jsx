import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { ImHtmlFive2 } from 'react-icons/im'

const Experience = () => {    

  return (
    <section id='experience'>
      <h5>My skills</h5>
      <h2>And Experiencie</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>+3 years</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>ReactJS</h4>
                <small className='text-light'>+2 year</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>+2 year</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>+3 years</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>2 years</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Chakra UI</h4>
                <small className='text-light'>2 years</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Next.js</h4>
                <small className='text-light'>1 year</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>1 year</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>1 year</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience