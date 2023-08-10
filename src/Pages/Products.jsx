import React from 'react'
import Navbar from '../Components/Navbar'

const Products = (props) => {
  const { currentUser} = props
  return (
    <div>  <Navbar currentUser ={currentUser}   />
    </div>
  )
}

export default Products