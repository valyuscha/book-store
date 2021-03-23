import {SET_ALL_BOOKS} from '../actionTypes'

const initialState = {
  isLoading: true,
  allBooks: []
}

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_BOOKS:
      return {...state, allBooks: action.payload, isLoading: false}
    default:
      return state
  }
}