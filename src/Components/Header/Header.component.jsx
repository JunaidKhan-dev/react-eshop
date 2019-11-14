import React from 'react'
import { connect } from 'react-redux'
import { ReactComponent as Logo } from '../../assets/images/crown.svg'
import {
  HeaderStyled,
  LogoStyled,
  OptionsStyled,
  OptionLink,
  OptionDiv
} from './Header.styles'
import { auth } from '../../firebase/firebase.util'
import CartIcon from '../CartIcon/CartIcon.component'
import CartDropdown from '../CartDropdown/CartDropdown.component'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectHidden } from '../../redux/cart/cart.selectors'

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderStyled>
      <LogoStyled to='/'>
        <Logo className='logo' />
      </LogoStyled>
      <OptionsStyled>
        <OptionLink to='/shop'> SHOP </OptionLink>
        <OptionLink to='/signin'> CONTACT </OptionLink>
        {
          currentUser ? <OptionDiv onClick={() => auth.signOut()}> SIGNOUT </OptionDiv> : <OptionLink to='/signin'>SIGNIN</OptionLink>
        }
        <CartIcon />
      </OptionsStyled>
      {
        hidden ? null : <CartDropdown />
      }

    </HeaderStyled>
  )
}

const mapStateToProps = (state) => {
  return {
    currentUser: selectCurrentUser(state),
    hidden: selectHidden(state)
  }
}

export default connect(mapStateToProps)(Header)
