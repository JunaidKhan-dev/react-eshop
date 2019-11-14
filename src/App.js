import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage/Homepage.component'
import ShopPage from './Pages/ShopPage/ShopPage.components'
import Header from './Components/Header/Header.component'
import SignInUp from './Pages/SignInUp/SignInUp.component'
import Checkout from './Pages/Checkout/Checkout.component'
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.util'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user-actions'
import { selectCurrentUser } from './redux/user/user.selectors'
import { selectCollectionForPreviews } from './redux/shop/shop.selectors'
class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount () {
    // firebase subscription it will load first and then remain in the call stack and trigger everytime the Auth changes and then we run the createUserProfileDocument method by passing the Auth object to check if Auth user exists in our DB other wise we need to create it, we dont need to check authentication as it is done automatically by firebase
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth) // create a user to the DB
        // checking the snapshop data and changing the state with data we get back from our DB
        userRef.onSnapshot(snapshot => {
          this.props.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      } else {
        this.props.setCurrentUser(userAuth)
      }
    })

    // addCollectionAndDocuments('collections', this.props.collectionArray.map(({ title, items }) => ({ title, items }))) only to add data once, this will add the local data to firebase in a batch call
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth()
  }

  render () {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' render={(props) => <ShopPage {...props} />} />
          <Route exact path='/checkout' render={(props) => <Checkout {...props} />} />
          <Route exact path='/signin' render={(props) => this.props.currentUser ? <Redirect to='/' /> : <SignInUp {...props} />} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: selectCurrentUser(state),
    collectionArray: selectCollectionForPreviews(state)
  }
}
const mapdispatchToProps = (dispatch) => {
  return {
    setCurrentUser: payload => dispatch(setCurrentUser(payload))
  }
}
export default connect(mapStateToProps, mapdispatchToProps)(App)
