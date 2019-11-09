import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ReactComponent as Logo } from '../../assets/images/crown.svg'
import './Header.style.scss'
import { auth } from '../../firebase/firebase.util'
import CartIcon from '../CartIcon/CartIcon.component'
import CartDropdown from '../CartDropdown/CartDropdown.component'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectHidden } from '../../redux/cart/cart.selectors'

const Header = ({ currentUser, hidden }) => {
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
        <CartIcon />
      </div>
      {
        hidden ? null : <CartDropdown />
      }

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentUser: selectCurrentUser(state),
    hidden: selectHidden(state)
  }
}

export default connect(mapStateToProps)(Header)
