import React, { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header.component'
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.util'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user-actions'
import { selectCurrentUser } from './redux/user/user.selectors'
import { selectCollectionForPreviews } from './redux/shop/shop.selectors'
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary.component'
import WithSpinner from './Components/WithSpinner/WithSpinner.component'
import HomePage from './Pages/HomePage/Homepage.component'
import ShopPage from './Pages/ShopPage/ShopPage.components'
// code-splitting via lazy function it will load chunk when needed like homepage JS will only load when needed and import will work like dynamically
// react router works with lazy automatically, but the async import need to wrap under Suspense component for routing

const SignInUp = lazy(() => import('./Pages/SignInUp/SignInUp.component'))
const Checkout = lazy(() => import('./Pages/Checkout/Checkout.component'))

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
          <ErrorBoundary>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' render={(props) => <ShopPage {...props} />} />
            <Suspense fallback={<div>... Loading</div>}>
              <Route exact path='/checkout' render={(props) => <Checkout {...props} />} />
              <Route exact path='/signin' render={(props) => this.props.currentUser ? <Redirect to='/' /> : <SignInUp {...props} />} />
            </Suspense>
          </ErrorBoundary>
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
