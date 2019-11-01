import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ReactComponent as Logo } from '../../assets/images/crown.svg'
import './Header.style.scss'
import { auth } from '../../firebase/firebase.util'

const Header = ({ currentUser }) => {
  console.log(currentUser)
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'> SHOP </Link>
        <Link className='option' to='/signin'> CONTACT </Link>
        {
          currentUser ? <div className='option' onClick={() => auth.signOut()}> SIGNOUT </div> : <Link to='/signin' className='option'>SIGNIN</Link>
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser
  }
}

export default connect(mapStateToProps)(Header)
