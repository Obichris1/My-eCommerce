import React from 'react'
import { Stack, Typography } from '@mui/material'
import './SignIn.css'
import { signInWithGoogle } from '../Firebase/utils'
import  Button from './Form/Button'

const SignIn = () => {
  const handleSubmit = async (e) => {
    e.preventDefault()
 
  }

  return (
    <Stack className='signIn wrap' gap='40px' >
        <Typography variant='h3'>
            Login
        </Typography>
          <form onSubmit={handleSubmit}>
          <Button onClick={signInWithGoogle}>
        SignIn with Google
        </Button>
          </form>
        


    </Stack>
  )
}

export default SignIn