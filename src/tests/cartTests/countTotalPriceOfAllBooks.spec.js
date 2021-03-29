import {countTotalPriceOfAllBooks} from 'utils'

describe('Check if function counts total price correctly', () => {
  it('Should return 0.3', () => {
    const books = [
      {currentBookTotalPrice: 0.1},
      {currentBookTotalPrice: 0.2}
    ]

    expect(countTotalPriceOfAllBooks(books)).toEqual(0.3)
  })

  it('Should return two numbers after the dot', () => {
    const books = [
      {currentBookTotalPrice: 42.001},
      {currentBookTotalPrice: 24.23}
    ]

    expect(countTotalPriceOfAllBooks(books)).toEqual(66.23)
  })

  it('Should NOT return numbers after the dot', () => {
    const books = [
      {currentBookTotalPrice: 42},
      {currentBookTotalPrice: 24}
    ]

    expect(countTotalPriceOfAllBooks(books)).toEqual(66)
  })
})