import {combineReducers} from 'redux'
import beers from './beerReducer'

const rootReducer = combineReducers({
  beers
})

export default rootReducer
