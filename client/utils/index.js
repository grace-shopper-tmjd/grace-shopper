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
  //if the guest user already has local storage
  if (localStorage) {
    //if the guest is trying to add a beer to their cart (otherwise we are setting their cart for the first time)
    if (JSON.stringify(item.beer)) {
      //if they already have items in their cart
      if (getCart(cartKey).length !== 0) {
        //reset cartItems to an empty array
        cartItems = []
        //loop through existing cart items
        getCart(cartKey).forEach(cartItem => {
          //check if item guest is trying to add to their cart is already in it
          if (Number(JSON.stringify(cartItem.beer.id)) === item.beer.id) {
            //checking if the product we're trying to add is already in our cart, if it is mark that it was alreadyInCart
            alreadyInCart = true
            //update quantity and price
            cartItem.quantity = cartItem.quantity + item.quantity
            cartItem.price = item.beer.price * cartItem.quantity
            //push updated item to our cartItems array
            cartItems.push(cartItem)
          } else {
            //if the current item in our cart is not the same product we're trying to add we push the existing cart item to our cartItems array
            cartItems.push(cartItem)
          }
        })
        //if the item wasn't already in our cart then we'll push the new item the guest is adding to our cartITems array
        if (!alreadyInCart) cartItems.push(item)
        //reset our local storage cart with either our updated cart items or our cart with the new item added
        localStorage.setItem(cartKey, JSON.stringify(cartItems))
      } else {
        //if our cart was empty we'll just push the item to our cart and save it to local storage.
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
