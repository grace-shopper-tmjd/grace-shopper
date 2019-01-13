import {GET_USER, REMOVE_USER} from '../actions/types'
const initialState = {
  defaultUser: {}
}
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        defaultUser: action.user
      }
    case REMOVE_USER:
      return initialState
    default:
      return state
  }
}
