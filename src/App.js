import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage/Homepage.component'
import ShopPage from './Pages/ShopPage/ShopPage.components'
import Header from './Components/Header/Header.component'
import SignInUp from './Pages/SignInUp/SignInUp.component'
import { auth } from './firebase/firebase.util'
class App extends React.Component {
  constructor () {
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount () {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      })

      console.log(user)
    })
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth()
  }

  render () {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' render={(props) => <ShopPage {...props} />} />
          <Route exact path='/signin' render={(props) => <SignInUp {...props} />} />
        </Switch>
      </div>
    )
  }
}

export default App
