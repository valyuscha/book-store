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

describe('Edit count of one book duplicates', () => {
  it('Should edit books count by increasing by one', () => {
    const changedCart = cart.editCountOfOneBookDuplicates(2, 'add')

    expect(changedCart.addedBooks).toEqual({
      2: {
        title: 'Book2',
        price: 30,
        availableCount: 10,
        addedCount: 5,
        canUserDecreaseBooksCount: true,
        canUserIncreaseBooksCount: true,
        currentBookTotalPrice: 150
      }
    })

    expect(changedCart.totalPrice).toEqual(150)
    expect(changedCart.totalCount).toEqual(5)
  })

  it('Should edit books count by decreasing by one', () => {
    const changedCart = cart.editCountOfOneBookDuplicates(2, 'remove')

    expect(changedCart.addedBooks).toEqual({
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

    expect(changedCart.totalPrice).toEqual(120)
    expect(changedCart.totalCount).toEqual(4)
  })
})