import React from 'react'
import './CartDropdown.style.scss'
import { connect } from 'react-redux'
import CustomButton from '../CustomButton/CustomButton.component'
import CartItem from '../CartItem/CartItem.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { withRouter } from 'react-router-dom'
import { cartToggleHiddenAction } from '../../redux/cart/cart.actions'

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.length
            ? cartItems.map(item => {
              return (
                <CartItem key={item.id} item={item} />
              )
            })
            : <span className='empty-message'>Your Cart is empty</span>
        }
      </div>
      <CustomButton onClick={() => {
        dispatch(cartToggleHiddenAction())
        history.push('/checkout')
      }}
      >GO TO CHECKOUT
      </CustomButton>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state)
  }
}

export default withRouter(connect(mapStateToProps)(CartDropdown))
