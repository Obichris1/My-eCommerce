import React from 'react'
import { Stack } from '@mui/material'
import shopMen from '../Assets/shopMen.jpg'
import shopWomen from '../Assets/shop-women.jpg'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div id = 'Hero'>
    <Stack direction='row' className ='img-container'>
        <img src={shopMen} alt="shopMen" className='img-1' />
        <img src={shopWomen} alt="shopWomen" className='img-2'/>
    </Stack>

    
    </div>
  )
}

export default HeroSection