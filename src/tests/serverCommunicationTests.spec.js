import {serverCommunicationMethods} from 'serverCommunication'

const dispatch = jest.fn()

describe('Server communication methods', () => {
  it('should not return undefined', async () => {
    const jsdomAlert = window.alert
    window.alert = () => {}

    const userData = await serverCommunicationMethods.login('Valentine', dispatch)

    const keys = ['username', 'avatar', 'token']
    const keysOfUserData = Object.keys(userData.data)
    const valuesOfUserData = Object.values(userData.data)

    expect(keysOfUserData).toEqual(keys)
    expect(valuesOfUserData).toBeTruthy()
    window.alert = jsdomAlert
  })

  it('should return current keys of one book', async () => {
    const books = await serverCommunicationMethods
      .getAllBooks('davdq906zzxyf6012h41', dispatch)

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

    const keysOfCurrentBook = Object.keys(books.data[0])

    expect(keysOfCurrentBook).toEqual(keys)
  })
})