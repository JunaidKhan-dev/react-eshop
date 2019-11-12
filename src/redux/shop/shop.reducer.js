import SHOP_DATA from './shop.data'
const INITIALSTATE = {
  collections: SHOP_DATA
}

const shopReducer = (state = INITIALSTATE, action = {}) => {
  switch (action.type) {
    default:
      return state
  }
}

export default shopReducer
