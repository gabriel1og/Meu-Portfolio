import React from 'react'
import './footer.css'
import { FaInstagram } from 'react-icons/fa'
import { RiLinkedinFill } from 'react-icons/ri'
import { BsGithub } from 'react-icons/bs'

const socialLinks = [
  {
      id: 1,
      link: "https://instagram.com/gabriel_gomidee",
      content: <FaInstagram />
  },
  {
      id: 2,
      link: "https://www.linkedin.com/in/gabriel-oliveira-gomide-b343a41b5/",
      content: <RiLinkedinFill />
  },
  {
      id: 3,
      link: "https://github.com/gabriel1og",
      content: <BsGithub />
  },
]

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Topics</a>

      <ul className='permaLinks'>
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#experience">Experiencie</a>
        </li>

        <li>
          <a href="#services">Services</a>
        </li>

        <li>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li style={{ display: "none" }}>
          <a href="#testimonials">Testimonials</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        {socialLinks.map(({id, link, content}) => {
          return (
            <a key={id} href={link} target="_blank">{content}</a>
          )
        })}
      </div>

      <div className="footer__copyright">
        <small>&copy; GABRIEL OG Portfolio. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer