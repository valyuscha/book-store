import {serverCommunicationMethods} from 'serverCommunication'
import {clearCart} from 'store'
import {deleteCookie} from 'utils'
import {START_LOGIN, LOGIN, LOGOUT} from '../actionTypes'

export const startLogin = () => {
  return {
    type: START_LOGIN
  }
}

export const login = () => {
  return {
    type: LOGIN
  }
}

export const logout = () => {
  deleteCookie('token')
  localStorage.removeItem('activeUser')

  return dispatch => {
    dispatch(clearCart())
    dispatch({type: LOGOUT})
  }
}

export const auth = (userName) => {
  return async dispatch => {
    dispatch(startLogin())
    const response = await serverCommunicationMethods.login(userName, dispatch)
    if (response && response.data.token) {
      document.cookie = `token=${response.data.token}`

      const userData = {
        name: response.data.username,
        avatar: response.data.avatar
      }

      localStorage.setItem('activeUser', JSON.stringify(userData))
      dispatch(login())
    }
  }
}