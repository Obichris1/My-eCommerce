import React from 'react'
import './AuthWrapper.css'
const AuthWrapper = ({children}) => {
  return (
    <div className='authWrapper'>
     

        <div>{children}</div>
    </div>
  )
}

export default AuthWrapper