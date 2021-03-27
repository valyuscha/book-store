export const countAllBooks = (books) => {
  return books.reduce((amount, book) => amount + book.addedCount, 0)
}