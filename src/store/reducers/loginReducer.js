import {getCookie} from 'utils'
import {START_LOGIN, LOGIN, LOGOUT} from '../actionTypes'

const token = getCookie('token')
const activeUser = JSON.parse(localStorage.getItem('activeUser'))

const initialState = {
  isLoggedIn: !!token && !!activeUser,
  isLoading: false
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOGIN:
      return {...state, isLoading: true}
    case LOGIN:
      return {...state, isLoggedIn: true, isLoading: false}
    case LOGOUT:
      return {...state, isLoggedIn: false}
    default:
      return state
  }
}