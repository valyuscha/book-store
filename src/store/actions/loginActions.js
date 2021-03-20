import {serverCommunicationMethods} from 'serverCommunication'
import {LOGIN, LOGOUT} from '../actionTypes'
import {startLoading, stopLoading} from './loaderActions'

export const login = () => {
  return {
    type: LOGIN
  }
}

export const logout = () => {
  return {
    type: LOGOUT
  }
}

export const auth = (userName) => {
  return async dispatch => {
    dispatch(startLoading())
    const response = await serverCommunicationMethods.login(userName, dispatch)
    if (response && response.data.token) {
      console.log('response', response)
      document.cookie = `token=${response.token}`
      dispatch(login())
    }
    dispatch(stopLoading())
  }
}