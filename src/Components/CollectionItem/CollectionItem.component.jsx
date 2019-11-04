import React from 'react'
import './CollectionItem.style.scss'
import CustomButtom from '../CustomButton/CustomButton.component'
import { connect } from 'react-redux'
import { addItemAction } from '../../redux/cart/cart.actions'
const CollectionItem = ({ item, addItemAction }) => {
  const { name, price, imageUrl } = item
  return (
    <div className='collection-item'>
      <div
        className='image' style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButtom inverted onClick={() => addItemAction(item)}> ADD TO CART </CustomButtom>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItemAction: (payload) => dispatch(addItemAction(payload))
  }
}

export default connect(null, mapDispatchToProps)(CollectionItem)
