import {
  SHOW_CONFIRM_LOGOUT_MODAL,
  HIDE_CONFIRM_LOGOUT_MODAL,
  SHOW_CONFIRM_CLEAR_CART_MODAL,
  HIDE_CONFIRM_CLEAR_CART_MODAL,
  SHOW_ADDED_BOOK_TO_CART_MODAL,
  HIDE_ADDED_BOOK_TO_CART_MODAL,
  SHOW_PURCHASE_MODAL,
  HIDE_PURCHASE_MODAL
} from '../actionTypes'

const initialState = {
  isConfirmLogoutModalVisible: false,
  isConfirmClearCartModalVisible: false,
  isAddedBookToCartModalVisible: false,
  isPurchaseModalVisible: false
}

export const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CONFIRM_LOGOUT_MODAL:
      return {...state, isConfirmLogoutModalVisible: true}
    case HIDE_CONFIRM_LOGOUT_MODAL:
      return {...state, isConfirmLogoutModalVisible: false}
    case SHOW_CONFIRM_CLEAR_CART_MODAL:
      return {...state, isConfirmClearCartModalVisible: true}
    case HIDE_CONFIRM_CLEAR_CART_MODAL:
      return {...state, isConfirmClearCartModalVisible: false}
    case SHOW_ADDED_BOOK_TO_CART_MODAL:
      return {...state, isAddedBookToCartModalVisible: true}
    case HIDE_ADDED_BOOK_TO_CART_MODAL:
      return {...state, isAddedBookToCartModalVisible: false}
    case SHOW_PURCHASE_MODAL:
      return {...state, isPurchaseModalVisible: true}
    case HIDE_PURCHASE_MODAL:
      return {...state, isPurchaseModalVisible: false}
    default:
      return state
  }
}