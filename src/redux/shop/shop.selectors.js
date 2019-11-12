import { createSelector } from 'reselect'

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
}

const selectShop = state => state.shop

const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

const selectCollection = (collectionId) => {
  return createSelector(
    [selectShopCollections],
    collection => collection.find(item => item.id === COLLECTION_ID_MAP[collectionId])
  )
}
export {
  selectShopCollections,
  selectCollection
}
