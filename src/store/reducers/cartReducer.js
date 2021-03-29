import {getCartValue} from 'utils'
import {
  ADD_NEW_BOOK_TO_CART,
  REMOVE_BOOK_FROM_CART,
  EDIT_BOOKS_COUNT,
  CLEAR_CART,
  SEND_PURCHASE_REQUEST,
  GET_PURCHASE_REQUEST,
  SET_PURCHASE_MESSAGE,
  CLEAR_PURCHASE_MESSAGE
} from '../actionTypes'

const cart = getCartValue()

const initialState = {
  addedBooks: cart.addedBooks,
  totalPrice: cart.totalPrice,
  totalCount: cart.totalCount,
  purchaseMessage: '',
  isLoading: false
}

const updateCart = (state, action) => {
  return {
    ...state,
    addedBooks: action.payload.addedBooks,
    totalPrice: action.payload.totalPrice,
    totalCount: action.payload.totalCount
  }
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_BOOK_TO_CART:
      return updateCart(state, action)
    case EDIT_BOOKS_COUNT:
      return updateCart(state, action)
    case REMOVE_BOOK_FROM_CART:
      return updateCart(state, action)
    case CLEAR_CART:
      return updateCart(state, action)
    case SEND_PURCHASE_REQUEST:
      return {...state, isLoading: true}
    case GET_PURCHASE_REQUEST:
      return {...state, isLoading: false}
    case SET_PURCHASE_MESSAGE:
      return {...state, purchaseMessage: action.payload}
    case CLEAR_PURCHASE_MESSAGE:
      return {...state, purchaseMessage: ''}
    default:
      return state
  }
}