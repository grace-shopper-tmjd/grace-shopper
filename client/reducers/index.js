import {combineReducers} from 'redux'
import beers from './beerReducer'
import orders from './orderReducer'
import user from './userReducer'

const rootReducer = combineReducers({
  beers,
  orders,
  user
})

export default rootReducer
