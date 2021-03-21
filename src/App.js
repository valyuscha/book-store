import React from 'react'
import {useSelector} from 'react-redux'
import {Switch, Route, Redirect} from 'react-router-dom'
import {LoginPage, BooksCatalogPage} from 'pages'

function App() {
  const {isLoggedIn} = useSelector(({login}) => login)

  if (!isLoggedIn) {
    return (
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Redirect to="/login" />
      </Switch>
    )
  } else {
    return (
      <Switch>
        <Route path="/catalog" component={BooksCatalogPage} />
        <Redirect to="/catalog" />
      </Switch>
    )
  }
}

export default App