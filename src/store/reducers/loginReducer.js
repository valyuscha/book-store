import {getCookie} from 'utils'
import {LOGIN, LOGOUT} from '../actionTypes'

const token = getCookie('token')

const initialState = {
  isLoggedIn: token !== 'null'
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {...state, isLoggedIn: true}
    case LOGOUT:
      return {...state, isLoggedIn: false}
    default:
      return state
  }
}