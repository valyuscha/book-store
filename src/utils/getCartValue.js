import Cart from 'models/Cart'

export const getCartValue = () => {
  const addedToCartBooks = JSON.parse(localStorage.getItem('addedToCartBooks'))

  if (addedToCartBooks) {
    return new Cart(
      addedToCartBooks.addedBooks,
      addedToCartBooks.totalPrice,
      addedToCartBooks.totalCount
    )
  } else {
    return new Cart({}, 0, 0)
  }
}