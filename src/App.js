import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage/Homepage.component'
import ShopPage from './Pages/ShopPage/ShopPage.components'

function App () {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' render={() => <ShopPage />} />
      </Switch>
    </div>
  )
}

export default App
