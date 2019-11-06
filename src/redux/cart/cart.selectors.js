import { createSelector } from 'reselect'

// first you need input selector to create a memoized part of selector state, usually this would be on single level from main state
const selectCart = state => state.cart

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
