import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.util'
import { shopUpdateCollectionsAction } from '../../redux/shop/shop.actions'
import WithSpinner from '../../Components/WithSpinner/WithSpinner.component'
import CollectionOverview from '../../Components/CollectionOverview/CollectionOverview.component'
import CollectionPage from '../Collection/Collection.component'
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
  state ={
    loading: true
  }

  unsubscribeFromSnapshot = null

  componentDidMount () {
    const collectionRef = firestore.collection('collections')
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      this.props.shopUpdateCollectionsAction(collectionsMap)
      this.setState({
        loading: false
      })
    })
  }

  render () {
    return (
      <div className='shop-page'>
        <Route exact path={`${this.props.match.path}`} render={(props) => <CollectionOverviewWithSpinner {...props} isLoading={this.state.loading} />} />
        <Route path={`${this.props.match.path}/:collectionId`} component={(props) => <CollectionPageWithSpinner {...props} isLoading={this.state.loading} />} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    shopUpdateCollectionsAction: (payload) => dispatch(shopUpdateCollectionsAction(payload))
  }
}

export default connect(null, mapDispatchToProps)(ShopPage)
// flow of the shop shopPage -- collectionPage --- collectionItem
