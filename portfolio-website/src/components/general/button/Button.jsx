import React from 'react'
import './button.css'
import { TiArrowUpThick } from 'react-icons/ti'

const Button = () => {

    const scrollTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
    }

  return (
    <div className="all">
        <button className="button" onClick={scrollTop}>
            <TiArrowUpThick className='icon' size={28}/>
        </button>
    </div>
  )
}

export default Button;