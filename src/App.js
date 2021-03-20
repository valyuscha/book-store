import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {LoginPage} from 'pages'

function App() {
  return (
    <Switch>
      <Route path="/" component={LoginPage} />
    </Switch>
  )
}

export default App