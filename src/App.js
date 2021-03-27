import React from 'react'
import {useSelector} from 'react-redux'
import {Switch, Route, Redirect} from 'react-router-dom'
import {LoginPage, BooksCatalogPage, BookInfoPage, CartPage} from 'pages'

function App() {
  const {isLoggedIn} = useSelector(({login}) => login)
  const activeUser = localStorage.getItem('activeUser')

  if (!isLoggedIn || !activeUser) {
    return (
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Redirect to="/login" />
      </Switch>
    )
  } else {
    return (
      <Switch>
        <Route path="/cart" component={CartPage} />
        <Route path="/catalog/:id" component={BookInfoPage} />
        <Route path="/catalog" component={BooksCatalogPage} />
        <Redirect to="/catalog" />
      </Switch>
    )
  }
}

export default App