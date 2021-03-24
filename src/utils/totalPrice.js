export const countTotalPriceOfSameBooks = (bookPrice, booksAmount) => {
  return Math.round((bookPrice * booksAmount) * 100) / 100
}