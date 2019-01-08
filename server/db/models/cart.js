'use strict';

const Sequelize = require('sequelize');
const db = require('./_db');

const Cart = db.define('card', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Cart;
