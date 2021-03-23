import {serverCommunicationMethods} from 'serverCommunication'
import {SET_ALL_BOOKS} from '../actionTypes'

export const setAllBooks = (books) => {
  return {
    type: SET_ALL_BOOKS,
    payload: books
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