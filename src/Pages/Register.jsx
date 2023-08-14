import React from 'react'
import Navbar from '../Components/Navbar'
import SignUp from '../Components/SignUp'

const Register = (props) => {
  const { currentUser} = props
  return (

    <div>
    <div>  <Navbar currentUser ={currentUser}   /></div>
    <SignUp />

    </div>

  )
}

export default Register