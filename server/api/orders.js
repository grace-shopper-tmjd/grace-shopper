const router = require('express').Router()
const {Order, OrderDetails, Beer, BeerStyle} = require('../db/models/index')
module.exports = router

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

//remove from cart
//add to car
