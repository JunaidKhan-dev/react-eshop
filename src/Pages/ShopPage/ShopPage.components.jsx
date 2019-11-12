import React from 'react'
import { Route } from 'react-router-dom'
import CollectionOverview from '../../Components/CollectionOverview/CollectionOverview.component'
import CollectionPage from '../Collection/Collection.component'
const ShopPage = ({ match }) => {
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} render={(props) => <CollectionOverview {...props} />} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}

export default ShopPage
// flow of the shop shopPage -- collectionPage --- collectionItem
