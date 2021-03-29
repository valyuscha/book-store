export const disableAddingNewBooksIfThereISNoCurrentBooks = (
  addedToCartBooks,
  currentBookInfo,
  setBooksCount,
  setCanIncreaseBooksCount,
  setTotalPrice
) => {
  const currentBookInCart = Object.entries(addedToCartBooks).filter(book => {
    if (book[0] === currentBookInfo.id) {
      return book
    }
  })

  if (currentBookInCart.length) {
    const alreadyAddedCount = currentBookInCart[0][1].addedCount
    if (currentBookInfo.count - alreadyAddedCount === 0) {
      setBooksCount(0)
      setCanIncreaseBooksCount(false)
      setTotalPrice(0)
    }

    if (currentBookInfo.count - alreadyAddedCount >= 1) {
      setTotalPrice(currentBookInfo.price)
    }

    if (currentBookInfo.count - alreadyAddedCount === 1) {
      setCanIncreaseBooksCount(false)
    }
  } else {
    setBooksCount(1)
    setCanIncreaseBooksCount(true)
    setTotalPrice(currentBookInfo.price)
  }
}