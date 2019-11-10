import { createSelector } from 'reselect'

const selectdirectory = (state) => state.directory

const selectSections = createSelector(
  [selectdirectory],
  (selectdirectory) => selectdirectory.sections
)

export {
  selectSections
}
