import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage/Homepage.component'
import ShopPage from './Pages/ShopPage/ShopPage.components'
import Header from './Components/Header/Header.component'
import SignInUp from './Pages/SignInUp/SignInUp.component'

function App () {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' render={(props) => <ShopPage {...props} />} />
        <Route exact path='/signin' render={(props) => <SignInUp {...props} />} />
      </Switch>
    </div>
  )
}

export default App
