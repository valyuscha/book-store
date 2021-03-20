import {combineReducers} from 'redux'
import {loginReducer} from './loginReducer'
import {loaderReducer} from './loaderReducer'
import {serverCommunicationReducer} from './serverCommunicationReducer'

export const rootReducer = combineReducers({
  login: loginReducer,
  loader: loaderReducer,
  serverCommunication: serverCommunicationReducer
})