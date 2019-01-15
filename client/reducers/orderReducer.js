import {
  GET_ALL_ORDERS,
  GET_AN_ORDER,
  ADD_TO_CART,
  GET_USER_CART,
  UPDATE_CART_ITEM,
  DELETE_ITEM_FROM_CART,
  GET_ORDER_DETAILS
} from '../actions/types'
let initialState = {
  orders: [],
  selectedOrder: {},
  cartItems: [],
  orderDetails: []
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

    case GET_ORDER_DETAILS:
      console.log('in reducer:', action.orderDetails)
      return {
        ...state,
        orderDetails: action.orderDetails
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

    case DELETE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.id)
      }

    case UPDATE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.map(
          cartItem => (action.item.id === cartItem.id ? action.item : cartItem)
        )
      }
    default:
      return state
  }
}
