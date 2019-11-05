import React from 'react'
import './CartDropdown.style.scss'
import { connect } from 'react-redux'
import CustomButton from '../CustomButton/CustomButton.component'
import CartItem from '../CartItem/CartItem.component'
const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.map(item => {
            return (
              <CartItem key={item.id} item={item} />
            )
          })
        }
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems
  }
}
export default connect(mapStateToProps)(CartDropdown)
