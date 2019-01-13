import {
  GET_ALL_ORDERS,
  GET_AN_ORDER,
  ADD_TO_CART,
  GET_USER_CART,
  UPDATE_ITEM_TO_CART
} from '../actions/types'
let initialState = {
  orders: [],
  selectedOrder: {},
  cartItems: []
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
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, ...action.item]
      }
    case GET_USER_CART:
      return {
        ...state,
        cartItems: action.selectedCart
      }

    // case UPDATE_ITEM_TO_CART:
    //   return {
    //     ...state,
    //     cartItems: state.cartItems.map(cartItem => (
    //       action.item.id === cartItem.id ? action.item.quantity + 1 : cartItem
    //     ))
    // }
    default:
      return state
  }
}
