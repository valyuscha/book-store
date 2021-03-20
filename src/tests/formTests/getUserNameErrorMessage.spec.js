import {getUserNameErrorMessage} from 'pages/LoginPage/getUserNameErrorMessage'

describe('Should return error message if value is smaller then 3 or longer then 16'
  + ' symbols', () => {
  it('should return \'Username is not valid\' message', () => {
    expect(getUserNameErrorMessage('Jan')).toEqual('Username is not valid')
    expect(getUserNameErrorMessage('Valentinefhdjgkturhfnb'))
      .toEqual('Username is not valid')
  })

  it('should return \'Enter the field\' message if value is empty', () => {
    expect(getUserNameErrorMessage('')).toEqual('Enter the field')
  })

  it('should return \'No error\' message if value is longer than 3 and smaller then 17'
    + ' symbols', () => {
    expect(getUserNameErrorMessage('Valentine')).toEqual('No error')
  })
})