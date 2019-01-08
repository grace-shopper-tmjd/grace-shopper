const Sequelize = require('sequelize')

//importing all models
const User = require('./user')
const Order = require('./order')
const Beer = require('./beer')

//assocations
// Order.hasOne(User)
// Order.hasOne(Beer)
// User.hasMany(Order)

//export all models
module.exports = {
  User,
  Order,
  Beer
}
