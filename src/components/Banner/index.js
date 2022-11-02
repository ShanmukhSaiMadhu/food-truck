import React from 'react'
import './styles.css'
import banner from '../../assets/banner.png'

function Banner() {
  return (
    <div className='banner'>
        <img src={banner} alt="Banner_Img" />
    </div>
  )
}

export default Banner