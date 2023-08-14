import React from 'react'
import './Button.css'

const Button = ({children, ...otherprops}) => {
  return (
    <div >
       <button className='btn'  {...otherprops}  >
        {children}
       </button>
    </div>
  )
}

export default Button