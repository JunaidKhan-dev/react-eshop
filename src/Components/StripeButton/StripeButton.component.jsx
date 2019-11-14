import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux'
import { clearCartAction } from '../../redux/cart/cart.actions'
import { withRouter } from 'react-router-dom'

const StripeCheckoutButton = ({ price, clearCartAction, history }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_goWqoK3YewVYPeVAwKurDT1C'
  const onToken = (token) => {
    console.log(token)
    clearCartAction()
    alert('payment Successful')
    history.push('/')
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='react-eshop'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

const mapDispatchToState = (dispatch) => {
  return {
    clearCartAction: () => dispatch(clearCartAction())
  }
}
export default connect(null, mapDispatchToState)(withRouter(StripeCheckoutButton))
