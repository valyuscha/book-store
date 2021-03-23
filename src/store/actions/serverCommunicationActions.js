import {
  SHOW_RESPONSE_ERROR_MESSAGE,
  HIDE_RESPONSE_ERROR_MESSAGE
} from '../actionTypes'

export const showResponseErrorMessage = () => {
  return {
    type: SHOW_RESPONSE_ERROR_MESSAGE
  }
}

export const hideResponseErrorMessage = () => {
  return {
    type: HIDE_RESPONSE_ERROR_MESSAGE
  }
}