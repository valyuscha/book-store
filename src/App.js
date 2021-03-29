import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import {getAllBooks} from 'store'

import {
  LoginPage,
  BooksCatalogPage,
  BookInfoPage,
  CartPage,
  NotFountPage
} from 'pages'

function App() {
  const dispatch = useDispatch()
  const {isLoggedIn} = useSelector(({login}) => login)

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getAllBooks())
    }
  }, [])

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