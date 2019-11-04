import { TOGGLECARTHIDDEN } from './cart.contants.js'

const INITIAL_STATE = {
  hidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLECARTHIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }

    default:
      return state
  }
}

export default cartReducer
