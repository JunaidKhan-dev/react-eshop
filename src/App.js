import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage/Homepage.component'

function App () {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' render={() => <h1>Hats Page</h1>} />
      </Switch>
    </div>
  )
}

export default App
