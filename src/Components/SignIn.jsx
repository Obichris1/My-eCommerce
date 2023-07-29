import React from 'react'
import { Stack, Typography,Button } from '@mui/material'
import './SignIn.css'
import { signInWithGoogle } from '../Firebase/utils'

const SignIn = () => {
  const handleSubmit = async (e) => {
    e.preventDefault()
 
  }

  return (
    <Stack className='signIn' gap='40px' >
        <Typography variant='h3'>
            Login
        </Typography>
          <form onSubmit={handleSubmit}>
          <Button variant='contained' onClick={signInWithGoogle}>
        SignIn with Google
        </Button>
          </form>
        


    </Stack>
  )
}

export default SignIn