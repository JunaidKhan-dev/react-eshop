import React from 'react'
import MenuItem from './../MenuItem/MenuItem.component'
import './Directory.style.scss'
import { selectSections } from '../../redux/Directory/Directory.selectors'
import { connect } from 'react-redux'

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  )
}

const mapSTateToProps = (state) => {
  return {
    sections: selectSections(state)
  }
}
export default connect(mapSTateToProps)(Directory)
