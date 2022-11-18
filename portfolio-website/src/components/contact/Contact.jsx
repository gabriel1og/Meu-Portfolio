import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

const contacts = [
  {
    icon: <MdOutlineEmail />,
    name: 'Email',
    user: 'gogomide.go@gmail.com',
    link: 'mailto:gogomide.go@gmail.com'
  },
 
  {
    icon: <BsWhatsapp />,
    name: 'Whatsapp',
    user: '+55 (31)99528-1401',
    link: 'https://api.whatsapp.com/send?phone=5531995281401'
  }
]

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2dh2trh', 'template_zb53yw9', form.current, '0CHXsPhmmKJ9_MN0w')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Meus contatos</h5>
      <h2>Entre em contato</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          {
            contacts.map(({icon, name, user, link}, index) => {
              return (
                <article key={index} className="contact__option">
                  <h1 className='contact__option-icon'>{icon}</h1> 
                  <h4>{name}</h4>
                  <h5>{user}</h5>
                  <a href={link} target='_blank'>Enviar mensagem</a>
                </article>
              )
            })
          }     
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Seu nome' required />
          <input type="email" name="email" placeholder='Seu email' required />
          <textarea name="message" rows="7" placeholder='Sua mensagem' required ></textarea>
          <button type="submit" className='btn btn-primary sm'>Enviar mensagem</button>
        </form>
      </div>
    </section>
  )
}

export default Contact