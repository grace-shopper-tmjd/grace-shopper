import {GET_ALL_ORDERS, GET_AN_ORDER} from '../actions/types'
let initialState = {
  orders: [],
  selectedOrder: {}
}
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_ORDERS:
      return {
        ...state,
        orders: action.orders
      }
    case GET_AN_ORDER:
      return {
        ...state,
        selectedOrder: action.selectedOrder
      }
    default:
      return state
  }
}
