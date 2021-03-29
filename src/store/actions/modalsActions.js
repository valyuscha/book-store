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

export const showConfirmClearCartModal = () => {
  return {
    type: SHOW_CONFIRM_CLEAR_CART_MODAL
  }
}

export const hideConfirmClearCartModal = () => {
  return {
    type: HIDE_CONFIRM_CLEAR_CART_MODAL
  }
}

export const showAddedToCartBookModal = () => {
  return {
    type: SHOW_ADDED_BOOK_TO_CART_MODAL
  }
}

export const hideAddedToCartBookModal = () => {
  return {
    type: HIDE_ADDED_BOOK_TO_CART_MODAL
  }
}

export const showPurchaseModal = () => {
  return {
    type: SHOW_PURCHASE_MODAL
  }
}

export const hidePurchaseModal = () => {
  return {
    type: HIDE_PURCHASE_MODAL
  }
}