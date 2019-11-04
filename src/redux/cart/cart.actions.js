import { TOGGLECARTHIDDEN, ADDITEM } from './cart.contants'

const cartToggleHiddenAction = () => {
  return {
    type: TOGGLECARTHIDDEN

  }
}

const addItemAction = (payload) => {
  return {
    type: ADDITEM,
    payload: payload
  }
}

export {
  cartToggleHiddenAction,
  addItemAction
}
