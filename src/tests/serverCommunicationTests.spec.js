import {serverCommunicationMethods} from 'serverCommunication'

const dispatch = jest.fn()

describe('Server communication methods', () => {
  it('Should return valid user info', async () => {
    const jsdomAlert = window.alert
    window.alert = () => {}
    const userData = await serverCommunicationMethods
      .login('Valentine', dispatch)

    const keys = ['username', 'avatar', 'token']
    const keysOfUserData = Object.keys(userData.data)
    const valuesOfUserData = Object.values(userData.data)

    expect(keysOfUserData).toEqual(keys)
    expect(valuesOfUserData).toBeTruthy()
    window.alert = jsdomAlert
  })

  it('Books data should not be undefined', async () => {
    const userData = await serverCommunicationMethods
      .login('Valentine', dispatch)
    const books = await serverCommunicationMethods
      .getAllBooks(userData.data.token, dispatch)

    expect(books.data).not.toBeUndefined()
  })

  it('Should return data with current keys and not undefined values', async () => {
    const userData = await serverCommunicationMethods
      .login('Valentine', dispatch)
    const book = await serverCommunicationMethods
      .getCurrentBookInfo(1, userData.data.token, dispatch)

    const keys = [
      'id',
      'title',
      'author',
      'level',
      'description',
      'cover',
      'tags',
      'price',
      'count'
    ]

    const bookDataKeys = Object.keys(book.data)
    expect(bookDataKeys).toEqual(keys)

    Object.values(book).forEach(value => expect(value).not.toBeUndefined())
  })
})