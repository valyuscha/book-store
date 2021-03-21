import {SHOW_CONFIRM_LOGOUT_MODAL, HIDE_CONFIRM_LOGOUT_MODAL} from '../actionTypes'

const initialState = {
  isConfirmLogoutModalVisible: false
}

export const ModalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CONFIRM_LOGOUT_MODAL:
      return {...state, isConfirmLogoutModalVisible: true}
    case HIDE_CONFIRM_LOGOUT_MODAL:
      return {...state, isConfirmLogoutModalVisible: false}
    default:
      return state
  }
}