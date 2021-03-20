import {axios} from 'utils'
import ResponseDebugger from './ResponseDebugger'

class RequestsSender extends ResponseDebugger {
  login = async (userName, dispatch) => {
    const formData = {
      username: userName
    }

    return await this.getResponse(
      axios.post('/signin', JSON.stringify(formData)),
      dispatch
    )
  }
}

export default RequestsSender