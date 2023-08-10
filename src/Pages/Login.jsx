import { Typography } from '@mui/material'
import React from 'react'
import SignIn from '../Components/SignIn'
import Navbar from '../Components/Navbar'

const Login = (props) => {

  const { currentUser } =  props    
  return (
    <div>
    <Navbar currentUser ={currentUser}/>
    <SignIn />
    </div>
  )
}

export default Login