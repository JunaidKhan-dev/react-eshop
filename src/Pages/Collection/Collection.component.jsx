import React from 'react'
import './Collection.style.scss'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selectors'
import CollectionItem from '../../Components/CollectionItem/CollectionItem.component'

const CollectionPage = ({ collection }) => {
  console.log('match', collection)
  return (
    <div className='collection-page'>
      <h2>Collection Page</h2>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state)
  }
}
export default connect(mapStateToProps)(CollectionPage)
