import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import objectReducer from '../objects/objectReducer'

const rootReducer = combineReducers({
  object: objectReducer,
  form: formReducer
})

export default rootReducer
