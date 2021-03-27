import {serverCommunicationMethods} from 'serverCommunication'
import {getCartValue} from 'utils'
import {
  ADD_NEW_BOOK_TO_CART,
  REMOVE_BOOK_FROM_CART,
  EDIT_BOOKS_COUNT
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

  const changedCart = {
    addedBooks: newBooks.addedBooks,
    totalPrice: newBooks.totalPrice,
    totalCount: newBooks.totalCount
  }

  localStorage.setItem('addedToCartBooks', JSON.stringify(changedCart))

  return {
    type: ADD_NEW_BOOK_TO_CART,
    payload: {
      addedBooks: newBooks.addedBooks,
      totalPrice: newBooks.totalPrice,
      totalCount: newBooks.totalCount
    }
  }
}

export const editBooksCount = (bookId, action) => {
  const editedBooks = cart.editCountOfOneBookDuplicates(bookId, action)

  const changedCart = {
    addedBooks: editedBooks.addedBooks,
    totalPrice: editedBooks.totalPrice,
    totalCount: editedBooks.totalCount
  }

  localStorage.setItem('addedToCartBooks', JSON.stringify(changedCart))

  return {
    type: EDIT_BOOKS_COUNT,
    payload: {
      addedBooks: editedBooks.addedBooks,
      totalPrice: editedBooks.totalPrice,
      totalCount: editedBooks.totalCount
    }
  }
}

export const deleteBookFromCart = (bookId) => {
  const booksListWithoutDeletedBook = cart.removeBookFromCart(bookId)

  const changedCart = {
    addedBooks: booksListWithoutDeletedBook.addedBooks,
    totalPrice: booksListWithoutDeletedBook.totalPrice,
    totalCount: booksListWithoutDeletedBook.totalCount
  }

  localStorage.setItem('addedToCartBooks', JSON.stringify(changedCart))

  return {
    type: REMOVE_BOOK_FROM_CART,
    payload: {
      addedBooks: booksListWithoutDeletedBook.addedBooks,
      totalPrice: booksListWithoutDeletedBook.totalPrice,
      totalCount: booksListWithoutDeletedBook.totalCount
    }
  }
}

export const purchase = (books, token) => {
  return async dispatch => {
    console.log('Click')
    const response = await serverCommunicationMethods.purchase(books, token, dispatch)

    console.log('Response', response)
  }
}