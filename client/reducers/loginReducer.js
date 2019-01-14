import {GET_USER, REMOVE_USER} from '../actions/types'
/**
 * INITIAL STATE
 */
const defaultUser = {}

export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
