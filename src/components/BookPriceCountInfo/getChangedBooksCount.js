import {chooseBooksAmount} from 'utils'

export const getChangedBooksCount = (
  currentBookInCart,
  booksCount,
  currentBookInfo,
  setCanIncreaseBooksCount,
  action
) => {
  let changedBooksCount

  if (currentBookInCart.length) {
    const alreadyAddedCount = currentBookInCart[0][1].addedCount

    changedBooksCount = chooseBooksAmount(
      booksCount,
      currentBookInfo.count - alreadyAddedCount,
      action,
      alreadyAddedCount
    )

    if (changedBooksCount === currentBookInfo.count - alreadyAddedCount) {
      setCanIncreaseBooksCount(false)
    } else if (changedBooksCount < currentBookInfo.count - alreadyAddedCount) {
      setCanIncreaseBooksCount(true)
    }
  } else {
    changedBooksCount = chooseBooksAmount(
      booksCount,
      currentBookInfo.count,
      action
    )

    if (changedBooksCount === currentBookInfo.count) {
      setCanIncreaseBooksCount(false)
    } else if (changedBooksCount < currentBookInfo.count) {
      setCanIncreaseBooksCount(true)
    }
  }

  return changedBooksCount
}