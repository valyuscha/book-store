import {axios} from 'utils'
import {showResponseErrorMessage, logout} from 'store'
import ResponseDebugger from './ResponseDebugger'

class RequestsSender extends ResponseDebugger {
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
}

export default RequestsSender