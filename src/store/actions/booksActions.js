import {serverCommunicationMethods} from 'serverCommunication'
import {
  START_GETTING_BOOKS_INFO,
  SET_ALL_BOOKS,
  FINISH_GETTING_BOOKS_INFO,
  SET_CURRENT_BOOK_INFO
} from '../actionTypes'

export const startGettingBooksInfo = () => {
  return {
    type: START_GETTING_BOOKS_INFO
  }
}

export const setAllBooks = (books) => {
  return {
    type: SET_ALL_BOOKS,
    payload: books
  }
}

export const finishGettingBooksInfo = () => {
  return {
    type: FINISH_GETTING_BOOKS_INFO
  }
}

export const setCurrentBookInfo = (bookInfo) => {
  return {
    type: SET_CURRENT_BOOK_INFO,
    payload: bookInfo
  }
}

export const getAllBooks = (token) => {
  return async dispatch => {
    const response = await serverCommunicationMethods.getAllBooks(token, dispatch)
    if (response && response.data) {
      dispatch(setAllBooks(response.data))
    }
  }
}

export const getCurrentBookInfo = (bookId, token) => {
  return async dispatch => {
    dispatch(startGettingBooksInfo())
    const response = await serverCommunicationMethods
      .getCurrentBookInfo(bookId, token, dispatch)

    if (response && response.data) {
      dispatch(setCurrentBookInfo(response.data))
      dispatch(finishGettingBooksInfo())
    }
  }
}