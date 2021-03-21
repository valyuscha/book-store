import {SHOW_CONFIRM_LOGOUT_MODAL, HIDE_CONFIRM_LOGOUT_MODAL} from '../actionTypes'

export const showConfirmLogoutModal = () => {
  return {
    type: SHOW_CONFIRM_LOGOUT_MODAL
  }
}

export const hideConfirmLogoutModal = () => {
  return {
    type: HIDE_CONFIRM_LOGOUT_MODAL
  }
}