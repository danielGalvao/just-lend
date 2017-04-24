import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import objectReducer from '../objects/objectReducer'
import { reducer as toastrReducer } from 'react-redux-toastr'

const rootReducer = combineReducers({
  object: objectReducer,
  form: formReducer,
  toastr: toastrReducer
})

export default rootReducer
