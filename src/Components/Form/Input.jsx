import React from 'react'
import './Input.css'

const Input = ({handleChange , label , ...otherprops}) => {
  return (
    <div className='input_wrapper'>
        {label && 
        <label>{label}</label>
        }
        
         
        <input  onChange = {handleChange} {...otherprops} className='input'   />
    </div>
  )
}

export default Input