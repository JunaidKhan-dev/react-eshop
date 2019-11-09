import { TOGGLECARTHIDDEN, ADDITEM, REMOVEITEM } from './cart.contants'

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

const removeItemAction = (payload) => {
  return {
    type: REMOVEITEM,
    payload: payload
  }
}

export {
  cartToggleHiddenAction,
  addItemAction,
  removeItemAction
}
