import { combineReducers } from 'redux'
import objectReducer from '../objects/objectReducer'

const rootReducer = combineReducers({
  object: objectReducer
})

export default rootReducer
