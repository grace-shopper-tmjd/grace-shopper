'use strict'

const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  orderNumber: {
    type: Sequelize.BIGINT,
    allowNull: false
  },
  orderDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  shipped: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false
  }
})

module.exports = Order
