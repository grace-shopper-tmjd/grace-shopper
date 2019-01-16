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

//get order details for a specific order
router.get('/details/:orderId', async (req, res, next) => {
  try {
    const orderDetails = await OrderDetails.findAll({
      where: {orderId: req.params.orderId},
      include: [{model: Beer, include: [BeerStyle]}]
    })
    res.send(orderDetails)
  } catch (err) {
    next(err)
  }
})
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

//remove orderDetails from cart

router.delete('/:userId/cart/:id', async (req, res, next) => {
  const {id} = req.params
  try {
    const deletedItem = await OrderDetails.destroy({
      where: {
        id: id
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

// create new order

router.post('/:userId', async (req, res, next) => {
  const userId = req.params.userId
  try {
    const newOrder = await Order.create({userId: userId, shipped: false})
    res.send(newOrder)
  } catch (error) {
    next(error)
  }
})

//update quantity of an order detail

router.put('/:userId/cart/:id', async (req, res, next) => {
  const id = req.params.id
  try {
    await OrderDetails.update(
      {
        quantity: req.body.quantity
      },
      {
        returning: true,
        where: {id: id}
      }
    )

    const item = await OrderDetails.findOne({
      where: {id: id},
      include: [{model: Beer, include: [BeerStyle]}]
    })
    res.send(item)
  } catch (error) {
    next(error)
  }
})

//change order from not shipped to shipped

router.put('/:orderId', async (req, res, next) => {
  const orderId = req.params.orderId
  try {
    const updatedOrder = await Order.update(
      {
        shipped: true
      },
      {
        where: {id: orderId}
      }
    )
    res.send(updatedOrder)
  } catch (error) {
    next(error)
  }
})
