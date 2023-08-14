import React from 'react'

const Input = ({handleChange , label , ...otherprops}) => {
  return (
    <div>
        {label && 
        <label>{label}</label>
        }
        
         
        <input  onChange = {handleChange} {...otherprops}   />
    </div>
  )
}

export default Input