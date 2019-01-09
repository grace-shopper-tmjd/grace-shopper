'use strict'

const Sequelize = require('sequelize')
const db = require('../db')

const BeerStyle = db.define('beerstyle', {
  name: {
    type: Sequelize.STRING
  }
})

module.exports = BeerStyle
