const Sequelize = require('sequelize')

//importing all models
const User = require('./user')
const Order = require('./order')
const Beer = require('./beer')
const OrderDetails = require('./orderDetails')
const BeerStyle = require('./beerStyle')

//assocations
Order.belongsTo(User)
OrderDetails.belongsTo(Beer)
OrderDetails.belongsTo(Order)
// Order.belongsTo(OrderDetails)

Beer.belongsTo(BeerStyle)

//export all models
module.exports = {
  User,
  Order,
  OrderDetails,
  Beer,
  BeerStyle
}
