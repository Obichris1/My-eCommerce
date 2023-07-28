import React from 'react'
import { Stack } from '@mui/material'
import shopMen from '../Assets/shopMen.jpg'
import shopWomen from '../Assets/shop-women.jpg'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div id = 'Hero'>
    <Stack direction='row' className ='img-container'>
        <img src={shopMen} alt="shopMen" />
        <img src={shopWomen} alt="shopWomen" />
    </Stack>

    <button className='men'>shop men</button>
    <button className= 'women'>shop Women</button>
    </div>
  )
}

export default HeroSection