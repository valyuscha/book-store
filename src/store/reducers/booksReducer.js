import {
  START_LOADING,
  SET_ALL_BOOKS,
  STOP_LOADING,
  SET_CURRENT_BOOK_INFO
} from '../actionTypes'

const initialState = {
  isLoading: true,
  allBooks: [],
  currentBookInfo: {}
}

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return {...state, isLoading: true}
    case SET_ALL_BOOKS:
      return {...state, allBooks: action.payload}
    case STOP_LOADING:
      return {...state, isLoading: false}
    case SET_CURRENT_BOOK_INFO:
      return {...state, currentBookInfo: action.payload}
    default:
      return state
  }
}