import React from 'react'
import './Carticon.style.scss'
import { connect } from 'react-redux'
import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg'
import { cartToggleHiddenAction } from '../../redux/cart/cart.actions'

const CartIcon = ({ cartToggleHiddenAction }) => {
  return (
    <div className='cart-icon' onClick={cartToggleHiddenAction}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'> 0 </span>
    </div>

  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    cartToggleHiddenAction: () => dispatch(cartToggleHiddenAction())
  }
}
export default connect(null, mapDispatchToProps)(CartIcon)
