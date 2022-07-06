import React from 'react'
import './testimonials.css'
import av1 from '../../assets/av1.jfif'
import av2 from '../../assets/av2.jfif'
import av3 from '../../assets/av3.jfif'
import av4 from '../../assets/av4.jfif'

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const test = [
  {
    avatar: av3,
    name: '(imagens meramente ilustrativas)',
    review: 'Em breve...'
  },
  {
    avatar: av4,
    name: '(imagens meramente ilustrativas)',
    review: 'Em breve...'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Feedbacks dos clientes</h5>
      <h2>Depoimentos</h2>

      <Swiper
       className="container testimonials__container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
      >
        {
          test.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>
                  {name}
                </h5>
                <small className='client__review'>
                  {review}
                </small>
               </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials