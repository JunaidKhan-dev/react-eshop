import React, { Component } from 'react'
import shopData from './shop.data'
import CollectionPreview from '../../Components/CollectionPreview/CollectionPreview.component'
class ShopPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      collections: shopData
    }
  }

  render () {
    const { collections } = this.state
    return (
      <div className='shop-page'>
        {
          collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))
        }
      </div>
    )
  }
}

export default ShopPage
