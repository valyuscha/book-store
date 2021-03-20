import {showResponseErrorMessage} from 'store'

class ResponseDebugger {
  getResponse = async (request, dispatch) => {
    try {
      return await request
    } catch (e) {
      dispatch(showResponseErrorMessage())
    }
  }
}

export default ResponseDebugger
