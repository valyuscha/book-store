import {serverCommunicationMethods} from 'serverCommunication'
import {
  START_LOADING,
  SET_ALL_BOOKS,
  STOP_LOADING,
  SET_CURRENT_BOOK_INFO
} from '../actionTypes'

export const startLoading = () => {
  return {
    type: START_LOADING
  }
}

export const setAllBooks = (books) => {
  return {
    type: SET_ALL_BOOKS,
    payload: books
  }
}

export const stopLoading = () => {
  return {
    type: STOP_LOADING
  }
}

export const setCurrentBookInfo = (bookInfo) => {
  return {
    type: SET_CURRENT_BOOK_INFO,
    payload: bookInfo
  }
}

export const getAllBooks = () => {
  return async dispatch => {
    dispatch(startLoading())
    const response = await serverCommunicationMethods.getAllBooks(dispatch)
    if (response && response.data) {
      dispatch(setAllBooks(response.data))
    }
    dispatch(stopLoading())
  }
}

export const getCurrentBookInfo = (bookId) => {
  return async dispatch => {
    dispatch(startLoading())
    const response = await serverCommunicationMethods
      .getCurrentBookInfo(bookId, dispatch)

    if (response && response.data) {
      dispatch(setCurrentBookInfo(response.data))
      dispatch(stopLoading())
    }
  }
}