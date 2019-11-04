import React from 'react'
import './CartDropdown.style.scss'
import CustomButton from '../CustomButton/CustomButton.component'
const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items' />
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropdown
