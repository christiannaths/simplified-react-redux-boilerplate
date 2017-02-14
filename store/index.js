import { createStore, combineReducers } from 'redux'
import { settings } from './reducers'

const rootReducer = combineReducers({
  settings
})

export default createStore(rootReducer)
