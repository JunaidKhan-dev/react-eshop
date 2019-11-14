import { createSelector } from 'reselect'

const selectShop = (state) => state.shop

const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
)

const selectCollectionForPreviews = createSelector(
  [selectShopCollections],
  (collection) => collection ? Object.keys(collection).map(key => collection[key]) : []
)
const selectCollection = (collectionUrlParam) => {
  return createSelector(
    [selectShopCollections],
    (collection) => collection ? collection[collectionUrlParam] : null
  )
}

export {
  selectShopCollections,
  selectCollection,
  selectCollectionForPreviews
}
