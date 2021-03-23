export const filterBooksByName = (value, books) => {
  if (value.trim()) {
    const filteredBooks = []

    books.filter(book => {
      if (book.title.toLowerCase().startsWith(value.toLowerCase().trim())) {
        filteredBooks.push(book)
      }
    })

    return filteredBooks
  } else {
    return books
  }
}