import {GET_ALL_BEERS, GET_A_BEER} from '../actions/types'
let initialState = {
  beers: [],
  selectedBeer: {}
}
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_BEERS:
      return {
        ...state,
        beers: action.beers
      }
    case GET_A_BEER:
      return {
        ...state,
        selectedBeer: action.selectedBeer
      }
    default:
      return state
  }
}
