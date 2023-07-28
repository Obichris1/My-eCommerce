import React from 'react'
import { Stack, Typography,Button } from '@mui/material'
import './SignIn.css'

const SignIn = () => {
  return (
    <Stack className='signIn' gap='40px' >
        <Typography variant='h3'>
            Login
        </Typography>

        <Button variant='contained' >
        SignIn with Google
        </Button>


    </Stack>
  )
}

export default SignIn