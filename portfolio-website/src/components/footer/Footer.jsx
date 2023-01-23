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
      <a href="#" className='footer__logo'>TÓPICOS</a>

      <ul className='permaLinks'>
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#about">Sobre</a>
        </li>

        <li>
          <a href="#experience">Experiência</a>
        </li>

        <li>
          <a href="#services">Serviços</a>
        </li>

        <li>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li style={{ display: "none" }}>
          <a href="#testimonials">Depoimentos</a>
        </li>

        <li>
          <a href="#contact">Contato</a>
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