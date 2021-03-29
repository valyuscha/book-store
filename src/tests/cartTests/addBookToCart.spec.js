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

const book = {
  id: 1,
  title: 'Book',
  price: 40,
  count: 15
}

describe('Add book to cart method', () => {
  it('Should add new book to cart', () => {
    const changedCart = cart.addBookToCart(book, 5, 200)
    expect(changedCart.addedBooks).toEqual({
      2: {
        title: 'Book2',
        price: 30,
        availableCount: 10,
        addedCount: 4,
        canUserDecreaseBooksCount: true,
        canUserIncreaseBooksCount: true,
        currentBookTotalPrice: 120
      },
      1: {
        title: 'Book',
        price: 40,
        availableCount: 15,
        addedCount: 5,
        canUserDecreaseBooksCount: true,
        canUserIncreaseBooksCount: true,
        currentBookTotalPrice: 200
      }
    })

    expect(changedCart.totalPrice).toEqual(320)
    expect(changedCart.totalCount).toEqual(9)
  })

  it('Should increase books count', () => {
    const changedCart = cart.addBookToCart(book, 10, 400)
    expect(changedCart.addedBooks).toEqual({
      2: {
        title: 'Book2',
        price: 30,
        availableCount: 10,
        addedCount: 4,
        canUserDecreaseBooksCount: true,
        canUserIncreaseBooksCount: true,
        currentBookTotalPrice: 120
      },
      1: {
        title: 'Book',
        price: 40,
        availableCount: 15,
        addedCount: 15,
        canUserDecreaseBooksCount: true,
        canUserIncreaseBooksCount: false,
        currentBookTotalPrice: 600
      }
    })

    expect(changedCart.totalPrice).toEqual(720)
    expect(changedCart.totalCount).toEqual(19)
  })
})