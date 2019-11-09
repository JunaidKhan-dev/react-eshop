import { TOGGLECARTHIDDEN, ADDITEM, REMOVEITEM } from './cart.contants.js'
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
    case REMOVEITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
      }

    default:
      return state
  }
}

export default cartReducer
