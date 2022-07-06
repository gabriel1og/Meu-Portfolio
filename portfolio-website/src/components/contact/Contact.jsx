import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

const contacts = [
  {
    name: 'Email',
    user: 'gogomide.go@gmail.com',
    link: 'mailto:gogomide.go@gmail.com'
  },
  {
    name: 'Messenger',
    user: 'gabriel1og',
    link: 'https://m.me/gabriel1og'
  },
  {
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
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          {
            contacts.map(({name, user, link}, index) => {
              return (
                <article key={index} className="contact__option">
                  <MdOutlineEmail className='contact__option-icon' />
                  <h4>{name}</h4>
                  <h5>{user}</h5>
                  <a href={link} target='_blank'>Send a message</a>
                </article>
              )
            })
          }     
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type="submit" className='btn btn-primary sm'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact