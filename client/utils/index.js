export const CART_KEY = 'cart'
let cartItems = []

export const getCart = (cartKey = CART_KEY) => {
  if (localStorage && localStorage.getItem(cartKey)) {
    return JSON.parse(localStorage.getItem(cartKey))
  }
  return cartItems
}

export const setCart = (item, cartKey = CART_KEY) => {
  let alreadyInCart = false
  if (localStorage) {
    if (JSON.stringify(item.beer)) {
      if (getCart(cartKey).length !== 0) {
        cartItems = []
        getCart(cartKey).forEach(cartItem => {
          if (Number(JSON.stringify(cartItem.beer.id)) === item.beer.id) {
            //checking if the product we're trying to add is already in our cart
            alreadyInCart = true
            cartItem.quantity = cartItem.quantity + item.quantity
            cartItem.price = item.beer.price * cartItem.quantity
            // JSON.stringify(cartItem)['quantity'] = (JSON.stringify(cartItem)['quantity'] || 0) + quant
            cartItems.push(cartItem)
          } else {
            //if the current item in our cart is not the same product we're trying to add we push the existing cart item to our cart
            cartItems.push(cartItem)
          }
        })
        if (!alreadyInCart) cartItems.push(item)
        localStorage.setItem(cartKey, JSON.stringify(cartItems))
      } else {
        cartItems.push(item)
        localStorage.setItem(cartKey, JSON.stringify(cartItems))
      }
    }
  }
}

export const clearCart = (cartKey = CART_KEY) => {
  if (localStorage) {
    localStorage.removeItem(cartKey)
  }
}
