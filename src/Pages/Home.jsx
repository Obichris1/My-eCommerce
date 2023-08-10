import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'

const Home = (props) => {
  const {currentUser} = props
  return (
    <div>
    <Navbar currentUser ={currentUser}   />

    <HeroSection />
    </div>
  )
}

export default Home