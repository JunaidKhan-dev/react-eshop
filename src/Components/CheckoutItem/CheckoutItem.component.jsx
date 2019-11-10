import React from 'react'
import './CheckoutItem.style.scss'
import { connect } from 'react-redux'
import { clearItemAction, addItemAction, removeItemAction } from '../../redux/cart/cart.actions'

const CheckoutItem = ({ clearItemAction, cartItem, addItemAction, removeItemAction }) => {
  const { name, imageUrl, price, quantity } = cartItem
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div
          className='arrow'
          onClick={() => removeItemAction(cartItem)}
        >&#10096;
        </div>
        <span className='value'>{quantity}</span>
        <div
          className='arrow'
          onClick={() => addItemAction(cartItem)}
        >&#10097;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div
        className='remove-button'
        onClick={() => clearItemAction(cartItem)}
      >
      &#10005;
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearItemAction: (payload) => dispatch(clearItemAction(payload)),
    addItemAction: (payload) => dispatch(addItemAction(payload)),
    removeItemAction: (payload) => dispatch(removeItemAction(payload))
  }
}

export default connect(null, mapDispatchToProps)(CheckoutItem)
