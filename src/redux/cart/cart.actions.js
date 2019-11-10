import { TOGGLECARTHIDDEN, ADDITEM, CLEARITEM, REMOVEITEM } from './cart.contants'

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

const clearItemAction = (payload) => {
  return {
    type: CLEARITEM,
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
  clearItemAction,
  removeItemAction
}
