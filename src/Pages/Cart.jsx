import React from 'react'
import Navbar from '../Components/Navbar'

const Cart = (props) => {
  const { currentUser} = props
  return (
    <div>  <Navbar currentUser ={currentUser}   /></div>
  )
}

export default Cart