import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useHistory, useLocation} from 'react-router-dom'

import {NotFountPageWrapper, Message} from './style'

const NotFountPage = () => {
  const history = useHistory()
  const location = useLocation()
  const {isLoggedIn} = useSelector(({login}) => login)
  const rootPathName = location.pathname.slice(0, 8)

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/login' && isLoggedIn) {
      history.push('/catalog')
    } else if (rootPathName === '/catalog' && !isLoggedIn || location.pathname === '/cart') {
      history.push('/login')
    }
  }, [])

  return (
    <NotFountPageWrapper>
      <Message>Oooops... Page is not found. Maybe it is not what you are searching</Message>
    </NotFountPageWrapper>
  )
}

export default NotFountPage