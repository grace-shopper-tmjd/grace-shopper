import {combineReducers} from 'redux'
import beers from './beerReducer'
import orders from './orderReducer'

const rootReducer = combineReducers({
  beers,
  orders
})

export default rootReducer
