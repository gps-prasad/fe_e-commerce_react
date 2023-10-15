import React from 'react'
import hand_icon from '../Assests/hand_icon.png';
import arrow_icon from '../Assests/arrow.png';
import hero_image from '../Assests/hero_image.png'
import './Hero.css'

export default function Hero() {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="hand-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt='hand...'/>
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className='hero-latest-btn'>
            <div>Latest Collection</div>
            <img src={arrow_icon} alt='arrow_icon...'></img>
        </div>
      </div>
      <div className='hero-right'>
      <img src={hero_image} alt='hero_img...'/>
      </div>
    </div>
  )
}

