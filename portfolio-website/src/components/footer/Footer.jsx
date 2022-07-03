import React from 'react'
import './footer.css'
import { FaInstagram } from 'react-icons/fa'
import { RiLinkedinFill } from 'react-icons/ri'
import { BsGithub } from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>GABRIEL</a>

      <ul className='permaLinks'>
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#experience">Experience</a>
        </li>

        <li>
          <a href="#services">Services</a>
        </li>

        <li>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li>
          <a href="#testimonials">Testimonials</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com">
          <RiLinkedinFill />
        </a>
        <a href="https://github.com">
          <BsGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; GABRIEL Tutorials. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer