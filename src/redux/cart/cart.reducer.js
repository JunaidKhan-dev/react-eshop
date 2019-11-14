import {
  TOGGLECARTHIDDEN,
  ADDITEM,
  CLEARITEM,
  REMOVEITEM,
  CLEARCART
} from './cart.contants.js'
import { addItemToCart, removeItemFromCart } from './cart.util'
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
    case REMOVEITEM: {
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }
    }
    case CLEARITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
      }
    case CLEARCART:
      return {
        ...state,
        cartItems: []
      }

    default:
      return state
  }
}

export default cartReducer
