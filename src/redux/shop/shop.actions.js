import { SHOPUPDATECOLLECTIONS } from './shop.constant'

const shopUpdateCollectionsAction = (payload) => {
  return {
    type: SHOPUPDATECOLLECTIONS,
    payload: payload
  }
}

export {
  shopUpdateCollectionsAction
}
