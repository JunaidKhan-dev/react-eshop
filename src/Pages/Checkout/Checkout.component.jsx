import React from 'react'
import './Checkout.style.scss'
import { connect } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../Components/CheckoutItem/CheckoutItem.component'

const Checkout = ({ cartItems, cartTotal }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(cartItem => {
          return <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        })
      }
      <div className='total'>
        <span>TOTAL: ${cartTotal}</span>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
    cartTotal: selectCartTotal(state)
  }
}
export default connect(mapStateToProps, null)(Checkout)
