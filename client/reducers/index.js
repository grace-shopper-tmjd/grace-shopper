import {combineReducers} from 'redux'
import beers from './beerReducer'
import orders from './orderReducer'
import user from './loginReducer'

const rootReducer = combineReducers({
  beers,
  orders,
  user
})

export default rootReducer
