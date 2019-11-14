import { SHOPUPDATECOLLECTIONS } from './shop.constant'
const INITIALSTATE = {
  collections: null
}

const shopReducer = (state = INITIALSTATE, action = {}) => {
  switch (action.type) {
    case SHOPUPDATECOLLECTIONS:
      return {
        ...state,
        collections: action.payload
      }
    default:
      return state
  }
}

export default shopReducer
