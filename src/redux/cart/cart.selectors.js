import { createSelector } from 'reselect'

// first you need input selector to create a memoized part of selector state, usually this would be on single level from main state
const selectCart = state => state.cart
// create a memoized selector for react state we need to use createSelection function which take two argument , a piece of state and function which take that piece of state and return other piece of state base on input piece of state
const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
)

const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((accu, item) => {
    return accu + item.quantity
  }, 0)
)

export {
  selectCartItems,
  selectCartItemsCount
}
