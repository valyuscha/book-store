import React from 'react'
import {useSelector} from 'react-redux'
import {Switch, Route} from 'react-router-dom'

import {
  LoginPage,
  BooksCatalogPage,
  BookInfoPage,
  CartPage,
  NotFountPage
} from 'pages'

function App() {
  const {isLoggedIn} = useSelector(({login}) => login)

  if (!isLoggedIn) {
    return (
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route component={NotFountPage} />
      </Switch>
    )
  } else {
    return (
      <Switch>
        <Route path="/cart" component={CartPage} />
        <Route path="/catalog/:id" component={BookInfoPage} />
        <Route path="/catalog" component={BooksCatalogPage} />
        <Route component={NotFountPage} />
      </Switch>
    )
  }
}

export default App