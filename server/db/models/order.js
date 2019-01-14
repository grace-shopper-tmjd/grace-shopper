'use strict'

const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  orderNumber: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
  orderDate: {
    type: Sequelize.DATE,
    defaultValue: new Date()
  },
  shipped: {
    type: Sequelize.BOOLEAN,
    default: false
  }
})

Order.afterCreate(order => {
  order.orderNumber++
})

module.exports = Order
