import {serverCommunicationMethods} from 'serverCommunication'
import {startLoading, stopLoading} from 'store'
import {LOGIN, LOGOUT} from '../actionTypes'

export const login = () => {
  return {
    type: LOGIN
  }
}

export const logout = (history) => {
  document.cookie = `token=${null}`
  localStorage.removeItem('activeUser')

  return {
    type: LOGOUT
  }
}

export const auth = (userName) => {
  return async dispatch => {
    dispatch(startLoading())
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
    dispatch(stopLoading())
  }
}