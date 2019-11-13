import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_goWqoK3YewVYPeVAwKurDT1C'
  const onToken = (token) => {
    console.log(token)
    alert('payment Successful')
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

export default StripeCheckoutButton
