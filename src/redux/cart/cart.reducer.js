import { TOGGLECARTHIDDEN, ADDITEM } from './cart.contants.js'
import { addItemToCart } from './cart.util'
const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLECARTHIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case ADDITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }

    default:
      return state
  }
}

export default cartReducer
