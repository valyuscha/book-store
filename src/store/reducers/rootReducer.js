import {combineReducers} from 'redux'
import {loginReducer} from './loginReducer'
import {serverCommunicationReducer} from './serverCommunicationReducer'
import {modalsReducer} from './modalsReducer'
import {booksReducer} from './booksReducer'
import {cartReducer} from './cartReducer'

export const rootReducer = combineReducers({
  login: loginReducer,
  serverCommunication: serverCommunicationReducer,
  modals: modalsReducer,
  books: booksReducer,
  cart: cartReducer
})