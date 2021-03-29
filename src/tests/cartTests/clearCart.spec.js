import Cart from 'models/Cart'

const cart = new Cart({
  2: {
    title: 'Book2',
    price: 30,
    availableCount: 10,
    addedCount: 4,
    canUserDecreaseBooksCount: true,
    canUserIncreaseBooksCount: true,
    currentBookTotalPrice: 120
  }
})

it('Should clear cart', () => {
  const changedCart = cart.clearCart()

  expect(changedCart.addedBooks).toEqual({})
  expect(changedCart.totalPrice).toEqual(0)
  expect(changedCart.totalCount).toEqual(0)
})