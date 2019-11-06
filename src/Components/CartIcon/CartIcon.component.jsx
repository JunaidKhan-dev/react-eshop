import React from 'react'
import './Carticon.style.scss'
import { connect } from 'react-redux'
import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg'
import { cartToggleHiddenAction } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

const CartIcon = ({ cartToggleHiddenAction, itemCount }) => {
  return (
    <div className='cart-icon' onClick={cartToggleHiddenAction}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'> {itemCount} </span>
    </div>

  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    cartToggleHiddenAction: () => dispatch(cartToggleHiddenAction())
  }
}

const mapStateToProps = (state) => {
  return {
    itemCount: selectCartItemsCount(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
