import React from 'react'
import './CheckoutItem.style.scss'
import { connect } from 'react-redux'
import { removeItemAction } from '../../redux/cart/cart.actions'
const CheckoutItem = ({ removeItemAction, cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <div
        className='remove-button'
        onClick={() => removeItemAction(cartItem)}
      >
      &#10005;
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeItemAction: (payload) => dispatch(removeItemAction(payload))
  }
}

export default connect(null, mapDispatchToProps)(CheckoutItem)
