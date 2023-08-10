import React from 'react'
import Navbar from '../Components/Navbar'

const Register = (props) => {
  const { currentUser} = props
  return (
    <div>  <Navbar currentUser ={currentUser}   /></div>
  )
}

export default Register