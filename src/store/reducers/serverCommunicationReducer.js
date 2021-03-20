import {SHOW_RESPONSE_ERROR_MESSAGE, HIDE_RESPONSE_ERROR_MESSAGE} from '../actionTypes'

const initialState = {
  isResponseErrorMessageVisible: false
}

export const serverCommunicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_RESPONSE_ERROR_MESSAGE:
      return {...state, isResponseErrorMessageVisible: true}
    case HIDE_RESPONSE_ERROR_MESSAGE:
      return {...state, isResponseErrorMessageVisible: false}
    default:
      return state
  }
}