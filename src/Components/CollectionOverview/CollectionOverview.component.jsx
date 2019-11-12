import React from 'react'
import './CollectionOverview.style.scss'
import { connect } from 'react-redux'
import { selectCollectionForPreviews } from '../../redux/shop/shop.selectors'
import CollectionPreview from '../CollectionPreview/CollectionPreview.component'

const CollectionOverview = ({ collections }) => {
  return (
    <div className='collection-overview'>
      {
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    collections: selectCollectionForPreviews(state)
  }
}
export default connect(mapStateToProps)(CollectionOverview)
