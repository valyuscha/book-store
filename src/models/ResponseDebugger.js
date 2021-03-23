class ResponseDebugger {
  getResponse = async (request, dispatch, func) => {
    try {
      return await request
    } catch (e) {
      dispatch(func())
    }
  }
}

export default ResponseDebugger