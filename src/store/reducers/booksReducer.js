import {
  START_GETTING_BOOKS_INFO,
  SET_ALL_BOOKS,
  FINISH_GETTING_BOOKS_INFO,
  SET_CURRENT_BOOK_INFO
} from '../actionTypes'

const initialState = {
  isLoading: true,
  allBooks: [],
  currentBookInfo: {}
}

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GETTING_BOOKS_INFO:
      return {...state, isLoading: true}
    case SET_ALL_BOOKS:
      return {...state, allBooks: action.payload}
    case FINISH_GETTING_BOOKS_INFO:
      return {...state, isLoading: false}
    case SET_CURRENT_BOOK_INFO:
      return {...state, currentBookInfo: action.payload, isLoading: false}
    default:
      return state
  }
}