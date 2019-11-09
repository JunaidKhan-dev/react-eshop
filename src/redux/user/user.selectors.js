import { createSelector } from 'reselect'

const user = (state) => state.user

const selectCurrentUser = createSelector(
  [user],
  (user) => user.currentUser
)

export {
  selectCurrentUser
}
