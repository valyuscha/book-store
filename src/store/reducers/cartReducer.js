import {getCartValue} from 'utils'
import {
  ADD_NEW_BOOK_TO_CART,
  REMOVE_BOOK_FROM_CART,
  EDIT_BOOKS_COUNT
} from '../actionTypes'

const cart = getCartValue()

const initialState = {
  addedBooks: cart.addedBooks,
  totalPrice: cart.totalPrice,
  totalCount: cart.totalCount
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
      return {
        ...state,
        addedBooks: action.payload.addedBooks,
        totalPrice: action.payload.totalPrice,
        totalCount: action.payload.totalCount
      }
    case EDIT_BOOKS_COUNT:
      return {
        ...state,
        addedBooks: action.payload.addedBooks,
        totalPrice: action.payload.totalPrice,
        totalCount: action.payload.totalCount
      }
    case REMOVE_BOOK_FROM_CART:
      return {
        ...state,
        addedBooks: action.payload.addedBooks,
        totalPrice: action.payload.totalPrice,
        totalCount: action.payload.totalCount
      }
    default:
      return state
  }
}