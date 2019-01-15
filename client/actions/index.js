import {
  GET_ALL_BEERS,
  GET_A_BEER,
  GET_ALL_ORDERS,
  GET_AN_ORDER,
  ADD_TO_CART,
  GET_USER_CART,
  UPDATE_CART_ITEM,
  DELETE_ITEM_FROM_CART,
  GET_USER,
  REMOVE_USER,
  CREATE_USER,
  GET_ORDER_DETAILS
} from './types'

import axios from 'axios'
import history from '../history'

// ------------------ Action Creators ------------------
// =====================================================
// =====================================================

// Action Creator - BEER

export const gotAllBeersFromServer = beers => {
  return {
    type: GET_ALL_BEERS,
    beers
  }
}

export const gotSingleBeerFromServer = singleBeer => {
  return {
    type: GET_A_BEER,
    selectedBeer: singleBeer
  }
}

// Action Creator - ORDER

export const gotAllOrdersFromServer = orders => {
  return {
    type: GET_ALL_ORDERS,
    orders
  }
}

export const gotSingleOrderFromServer = singleOrder => {
  return {
    type: GET_AN_ORDER,
    selectedOrder: singleOrder
  }
}

export const gotOrderDetails = orderDetails => {
  return {
    type: GET_ORDER_DETAILS,
    orderDetails: orderDetails
  }
}

// Action Creator - CART
export const addedItemToCart = beer => {
  return {
    type: ADD_TO_CART,
    item: beer
  }
}

export const gotUserCartFromServer = userCart => {
  return {
    type: GET_USER_CART,
    selectedCart: userCart
  }
}

export const updatedCartItem = beer => {
  return {
    type: UPDATE_CART_ITEM,
    item: beer
  }
}

export const deletedItemFromCart = id => {
  return {
    type: DELETE_ITEM_FROM_CART,
    id
  }
}

// Action Creator - User

const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
const createdUserForServer = user => {
  return {
    type: CREATE_USER,
    user
  }
}

// ------------------ Thunk Creators -------------------
// =====================================================
// =====================================================

// Thunk Creator - Beer
// ===========================================

export const fetchAllBeers = () => async dispatch => {
  const {data} = await axios.get('/api/beers')
  const beers = data
  const action = gotAllBeersFromServer(beers)
  dispatch(action)
}

export const fetchSingleBeer = beerId => async dispatch => {
  const {data} = await axios.get(`/api/beers/${beerId}`)
  const beer = data
  const action = gotSingleBeerFromServer(beer)
  dispatch(action)
}
// Thunk Creator - Order
// ===========================================

export const fetchAllOrders = userId => async dispatch => {
  const {data} = await axios.get(`/api/orders/${userId}`)
  const orders = data
  const action = gotAllOrdersFromServer(orders)
  dispatch(action)
}

// export const fetchSingleOrder = orderId => async dispatch => {
//   const {data} = await axios.get(`/api/orders/details/${orderId}`)
//   const order = data
//   const action = gotSingleOrderFromServer(order)
//   dispatch(action)
// }

export const fetchOrderDetails = orderId => async dispatch => {
  const {data} = await axios.get(`/api/orders/details/${orderId}`)
  const orderDetails = data
  const action = gotOrderDetails(orderDetails)
  dispatch(action)
}
// Thunk Creator - CART
// ===========================================

import {setCart, getCart, clearCart, CART_KEY} from '../utils'

export const fetchUserCart = userId => async dispatch => {
  //if the user  is logged in
  if (userId) {
    try {
      const {data} = await axios.get(`/api/orders/${userId}/cart`)
      const action = gotUserCartFromServer(data)
      dispatch(action)
    } catch (error) {
      console.log(error)
    }
    //if the user is a guest and already has a cart
  } else if (localStorage && localStorage.getItem(CART_KEY)) {
    const cart = getCart(CART_KEY)
    const action = gotUserCartFromServer(cart)
    dispatch(action)
    //if the user is a guest and does not have a cart yet
  } else {
    setCart({})
    const cart = getCart(CART_KEY)
    const action = gotUserCartFromServer(cart)
    dispatch(action)
  }
}

export const addToCart = (beer, userId) => async dispatch => {
  //If the user is logged in
  if (userId) {
    try {
      const {data} = await axios.post(`/api/orders/${userId}/cart/add`, beer)
      const action = addedItemToCart(data)
      dispatch(action)
    } catch (error) {
      console.log(error)
    }
    //If the user is a guest
  } else {
    const {data} = await axios.get(`/api/beers/${beer.beerId}`)

    // Create fake order obj
    let guestCart = {
      beerId: beer.beerId,
      quantity: beer.quantity,
      beer: data,
      price: beer.price * beer.quantity
    }
    setCart(guestCart, CART_KEY)
    const action = addedItemToCart(guestCart)
    dispatch(action)
  }
}

export const updateCartItem = (beer, userId) => async dispatch => {
  try {
    const {data} = await axios.put(
      `/api/orders/${userId}/cart/${beer.id}`,
      beer
    )
    const action = updatedCartItem(data)
    dispatch(action)
  } catch (error) {
    console.log(error)
  }
}

export const deleteFromCart = (orderDetailsId, userId) => async dispatch => {
  try {
    await axios.delete(`/api/orders/${userId}/cart/${orderDetailsId}`)
    dispatch(deletedItemFromCart(orderDetailsId))
  } catch (error) {
    console.log(error)
  }
}

// Thunk Creator - User
// ===========================================

export const me = () => async dispatch => {
  const defaultUser = {}
  try {
    const res = await axios.get('/api/users/auth/me')
    dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/api/users/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }
  try {
    dispatch(getUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

export const createOneUser = (user, history) => async dispatch => {
  try {
    const {data} = await axios.post('/api/users/auth/registration', user)
    const newUser = data
    const action = createdUserForServer(newUser)
    history.push('/home')
    dispatch(action)
  } catch (error) {
    console.error(error)
  }
}
