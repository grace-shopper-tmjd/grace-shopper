export const CART_KEY = 'cart'
let cartItems = []

export const setCart = (item = [], cartKey = CART_KEY) => {
  if (localStorage) {
    cartItems.push(item)
    localStorage.setItem(cartKey, JSON.stringify(cartItems))
  }
}

export const getCart = (cartKey = CART_KEY) => {
  if (localStorage && localStorage.getItem(cartKey)) {
    return JSON.parse(localStorage.getItem(cartKey))
  }
  return []
}

export const clearCart = (cartKey = CART_KEY) => {
  if (localStorage) {
    localStorage.removeItem(cartKey)
  }
}
