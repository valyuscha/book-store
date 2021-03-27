import {axios} from 'utils'
import {showResponseErrorMessage, logout} from 'store'
import ResponseDebugger from './ResponseDebugger'

class RequestsSender extends ResponseDebugger {
  constructor() {
    super()

    if (RequestsSender._instance) {
      return RequestsSender._instance
    }

    RequestsSender._instance = this
  }

  login = async (userName, dispatch) => {
    const formData = {
      username: userName
    }

    return await this.getResponse(
      axios.post('/signin', JSON.stringify(formData)),
      dispatch,
      showResponseErrorMessage
    )
  }

  getAllBooks = async (token, dispatch) => {
    return await this.getResponse(axios.get('/books', {
      params: {token}
    }), dispatch, logout)
  }

  getCurrentBookInfo = async (bookId, token, dispatch) => {
    return await this.getResponse(axios.get(`/books/${bookId}`, {
      params: {token}
    }), dispatch, logout)
  }

  purchase = async (booksList, token, dispatch) => {
    const purchaseData = {
      books: booksList
    }

    return await this.getResponse(axios.post(
      '/purchase',
      JSON.stringify(purchaseData),
      {
        params: {token}
      },
      dispatch,
      () => console.log('Error')
    ))
  }
}

export default RequestsSender