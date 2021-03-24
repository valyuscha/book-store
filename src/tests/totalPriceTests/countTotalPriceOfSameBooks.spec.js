import {countTotalPriceOfSameBooks} from 'utils'

describe('Check if total price has correct format', () => {
  it('Price should have two numbers after the dot', () => {
    const result = countTotalPriceOfSameBooks(38.77, 5)
    expect(result).toEqual(193.85)
  })

  it('Price should have one number after the dot', () => {
    const result = countTotalPriceOfSameBooks(45.19, 10)
    expect(result).toEqual(451.9)
  })

  it('Price should have no numbers after the dot', () => {
    const result = countTotalPriceOfSameBooks(40, 2)
    expect(result).toEqual(80)
  })
})