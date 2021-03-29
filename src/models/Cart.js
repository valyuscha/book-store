import {
  chooseBooksAmount,
  countTotalPriceOfSameBooks,
  countTotalPriceOfAllBooks,
  countAllBooks
} from 'utils'

class Cart {
  constructor(addedBooks, totalPrice, totalCount) {
    if (Cart._instance) {
      return Cart._instance
    }
    Cart._instance = this

    this.addedBooks = addedBooks
    this.totalPrice = totalPrice
    this.totalCount = totalCount
  }

  addBookToCart = (book, addedCount, currentBookTotalPrice) => {
    const booksIds = Object.keys(this.addedBooks)

    const newBook = {
      title: book.title,
      price: book.price,
      availableCount: book.count,
      canUserIncreaseBooksCount: addedCount !== book.count,
      canUserDecreaseBooksCount: addedCount !== 1,
      addedCount,
      currentBookTotalPrice
    }

    if (booksIds) {
      if (!this.addedBooks[book.id]) {
        this.addedBooks[book.id] = newBook
      } else {
        this.addedBooks[book.id].addedCount += addedCount
        this.addedBooks[book.id].currentBookTotalPrice = countTotalPriceOfSameBooks(
          this.addedBooks[book.id].price,
          this.addedBooks[book.id].addedCount
        )

        this.addedBooks[book.id].canUserIncreaseBooksCount = this.addedBooks[book.id].addedCount
          !== this.addedBooks[book.id].availableCount
        this.addedBooks[book.id].canUserDecreaseBooksCount = this.addedBooks[book.id].addedCount
          !== 1
      }
    } else {
      this.addedBooks[book.id] = newBook
    }

    const books = Object.values(this.addedBooks)
    this.totalPrice = countTotalPriceOfAllBooks(books)
    this.totalCount = countAllBooks(books)

    return Cart._instance
  }

  removeBookFromCart = (bookId) => {
    const booksEntries = Object.entries(this.addedBooks)
    const filteredBooks = booksEntries.filter(book => +book[0] !== +bookId)
    this.addedBooks = Object.fromEntries(filteredBooks)

    const booksValues = Object.values(this.addedBooks)
    this.totalPrice = countTotalPriceOfAllBooks(booksValues)
    this.totalCount = countAllBooks(booksValues)

    return Cart._instance
  }

  editCountOfOneBookDuplicates = (bookId, action) => {
    const changedBooksDuplicatesAmount = chooseBooksAmount(
      this.addedBooks[bookId].addedCount,
      this.addedBooks[bookId].availableCount,
      action
    )

    const {availableCount} = this.addedBooks[bookId]

    const canUserIncreaseBooksCount = changedBooksDuplicatesAmount !== availableCount

    const canUserDecreaseBooksCount = changedBooksDuplicatesAmount !== 1

    this.addedBooks[bookId].canUserIncreaseBooksCount = canUserIncreaseBooksCount
    this.addedBooks[bookId].canUserDecreaseBooksCount = canUserDecreaseBooksCount

    this.addedBooks[bookId].addedCount = changedBooksDuplicatesAmount
    this.addedBooks[bookId].currentBookTotalPrice = countTotalPriceOfSameBooks(
      this.addedBooks[bookId].price,
      changedBooksDuplicatesAmount
    )

    const books = Object.values(this.addedBooks)
    this.totalPrice = countTotalPriceOfAllBooks(books)
    this.totalCount = countAllBooks(books)

    return Cart._instance
  }

  clearCart = () => {
    this.addedBooks = {}
    this.totalPrice = 0
    this.totalCount = 0

    return Cart._instance
  }
}

export default Cart