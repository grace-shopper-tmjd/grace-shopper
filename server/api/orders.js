const router = require('express').Router()
const {Order, OrderDetails, Beer, BeerStyle} = require('../db/models/index')
module.exports = router

const throwNotFoundIfFalsey = maybeFalsey => {
  if (!maybeFalsey) {
    const err = Error('beer not found')
    err.status = 404
    throw err
  }
}

//get all orders
router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll()
    res.send(orders)
  } catch (err) {
    next(err)
  }
})

//get all shipped orders for specific user
router.get('/:userId', async (req, res, next) => {
  const id = req.params.userId
  try {
    const orders = await Order.findAll({
      where: {
        userId: id,
        shipped: true
      }
    })
    res.send(orders)
  } catch (err) {
    next(err)
  }
})

//get everything in a users cart
router.get('/:userId/cart', async (req, res, next) => {
  const userId = req.params.userId
  try {
    const cartOrder = await Order.findOne({
      where: {
        userId: userId,
        shipped: false
      }
    })

    const cartOrderId = cartOrder.id

    const cartDetails = await OrderDetails.findAll({
      where: {orderId: cartOrderId},
      include: [{model: Beer, include: [BeerStyle]}]
    })

    res.send(cartDetails)
  } catch (err) {
    next(err)
  }
})

//get order history details for a specific order
router.get('/:userId/:orderId', async (req, res, next) => {
  const orderId = req.params.orderId
  try {
    const orderDetails = await OrderDetails.findAll({
      where: {orderId: orderId},
      include: [{model: Beer, include: [BeerStyle]}]
    })
    res.send(orderDetails)
  } catch (err) {
    next(err)
  }
})

//remove orderDetails from cart

router.delete('/:userId/:orderId/:orderDetailsId', async (req, res, next) => {
  const {orderDetailsId} = req.params
  try {
    const deletedItem = await OrderDetails.destroy({
      where: {
        id: orderDetailsId
      }
    })
    throwNotFoundIfFalsey(deletedItem)
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})

//add orderDetails to cart

router.post('/:userId/cart/add', async (req, res, next) => {
  try {
    const userId = req.params.userId
    const cart = await Order.findOne({
      where: {
        shipped: false,
        userId
      }
    })
    const {quantity, price, beerId} = req.body

    const orderDetailsItem = await OrderDetails.create({
      quantity,
      price,
      beerId,
      orderId: cart.id
    })

    res.send(orderDetailsItem)
  } catch (err) {
    next(err)
  }
})
