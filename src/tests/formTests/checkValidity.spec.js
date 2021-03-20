import {checkValidity} from 'utils'

describe('Should return false if value is not valid', () => {
  const rules = {
    required: true,
    minLength: 4,
    maxLength: 16
  }

  it('Value cannot be empty', () => {
    expect(checkValidity('', rules)).toBeFalsy()
  })

  it('Value has to be longer than 3 and smaller than 17 symbols', () => {
    expect(checkValidity('Jan', rules)).toBeFalsy()
    expect(checkValidity('Valentineghfjdklgytru', rules)).toBeFalsy()
  })

  it('Value is valid', () => {
    expect(checkValidity('Valentine', rules)).toBeTruthy()
  })
})