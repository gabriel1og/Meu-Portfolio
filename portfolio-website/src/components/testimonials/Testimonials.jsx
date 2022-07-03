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
    avatar: av1,
    name: 'Jorge Bischoff',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Necessitatibus modi commodi labore optio voluptas placeat.'
  },
  {
    avatar: av2,
    name: 'Ana Witsel',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Necessitatibus modi commodi labore optio voluptas placeat.'
  },
  {
    avatar: av3,
    name: 'Andre Castro',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Necessitatibus modi commodi labore optio voluptas placeat.'
  },
  {
    avatar: av4,
    name: 'Maria Weber',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Necessitatibus modi commodi labore optio voluptas placeat.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

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