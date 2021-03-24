import {chooseBooksAmount} from 'utils'

describe('Choose books amount', () => {
  it('Should increase books amount by one', () => {
    const result = chooseBooksAmount(3, 5, 'add')
    expect(result).toEqual(4)
  })

  it('Should NOT increase books amount by one', () => {
    const result = chooseBooksAmount(5, 5, 'add')
    expect(result).toEqual(5)
  })

  it('Should decrease books amount by one', () => {
    const result = chooseBooksAmount(3, 5, 'remove')
    expect(result).toEqual(2)
  })

  it('Should NOT decrease books amount by one', () => {
    const result = chooseBooksAmount(1, 5, 'remove')
    expect(result).toEqual(1)
  })
})