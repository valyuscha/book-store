export const countTotalPriceOfSameBooks = (bookPrice, booksAmount) => {
  return Math.round((bookPrice * booksAmount) * 100) / 100
}

export const countTotalPriceOfAllBooks = (books) => {
  return books.reduce((totalPrice, book) => {
    return Math.round((totalPrice + book.currentBookTotalPrice) * 100) / 100
  }, 0)
}