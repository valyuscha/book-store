import {serverCommunicationMethods} from 'serverCommunication'
import {showPurchaseModal} from 'store'
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

const actionCreator = (books, action) => {
  const changedCart = {
    addedBooks: books.addedBooks,
    totalPrice: books.totalPrice,
    totalCount: books.totalCount
  }

  localStorage.setItem('addedToCartBooks', JSON.stringify(changedCart))

  return {
    type: action,
    payload: {
      addedBooks: books.addedBooks,
      totalPrice: books.totalPrice,
      totalCount: books.totalCount
    }
  }
}

export const addNewBookToCart = (book, addedCount, currentBookTotalPrice) => {
  const newBooks = cart.addBookToCart(book, addedCount, currentBookTotalPrice)

  return dispatch => {
    dispatch(actionCreator(newBooks, ADD_NEW_BOOK_TO_CART))
  }
}

export const editBooksCount = (bookId, action) => {
  const editedBooks = cart.editCountOfOneBookDuplicates(bookId, action)

  return dispatch => {
    dispatch(actionCreator(editedBooks, EDIT_BOOKS_COUNT))
  }
}

export const deleteBookFromCart = (bookId) => {
  const booksListWithoutDeletedBook = cart.removeBookFromCart(bookId)

  return dispatch => {
    dispatch(actionCreator(booksListWithoutDeletedBook, REMOVE_BOOK_FROM_CART))
  }
}

export const clearCart = () => {
  const emptyCart = cart.clearCart()

  return dispatch => {
    dispatch(actionCreator(emptyCart, CLEAR_CART))
  }
}

export const sendPurchaseRequest = () => {
  return {
    type: SEND_PURCHASE_REQUEST
  }
}

export const getPurchaseRequest = () => {
  return {
    type: GET_PURCHASE_REQUEST
  }
}

export const setPurchaseMessage = (message) => {
  return {
    type: SET_PURCHASE_MESSAGE,
    payload: message
  }
}

export const clearPurchaseMessage = () => {
  return {
    type: CLEAR_PURCHASE_MESSAGE
  }
}

export const purchase = (books) => {
  return async dispatch => {
    dispatch(sendPurchaseRequest())
    const response = await serverCommunicationMethods.purchase(books, dispatch)
    dispatch(setPurchaseMessage(response.data.message))
    dispatch(getPurchaseRequest())
    dispatch(showPurchaseModal())
  }
}