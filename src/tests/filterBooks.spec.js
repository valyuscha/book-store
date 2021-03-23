import {filterBooksByName} from 'components/BooksCatalogFilters/filterBooksByName'
import {filterBooksByPrice} from 'components/BooksCatalogFilters/filterBooksByPrice'

const books = [
  {title: 'Sicilian', price: 12.5},
  {title: 'The Godfather', price: 43.7},
  {title: 'The Count of Monte Cristo', price: 55}
]

describe('Filter books by name and price', () => {
  it('Should return books whose titles begin with the value', () => {
    const filteredBooks = filterBooksByName('si', books)
    expect(filteredBooks).toEqual([{title: 'Sicilian', price: 12.5}])
  })

  it('Should return books whose prices are bigger than 0 and smaller or equal to 25$', () => {
    const filteredBooks = filterBooksByPrice('0 < price < 25', books)
    expect(filteredBooks).toEqual([{title: 'Sicilian', price: 12.5}])
  })

  it('Should return books whose prices are bigger than 25 and smaller or equal to 50$', () => {
    const filteredBooks = filterBooksByPrice('25 < price < 50', books)
    expect(filteredBooks).toEqual([{title: 'The Godfather', price: 43.7}])
  })

  it('Should return books whose prices are bigger than 50$', () => {
    const filteredBooks = filterBooksByPrice('price > 50', books)
    expect(filteredBooks).toEqual([{title: 'The Count of Monte Cristo', price: 55}])
  })
})