'use strict'

const Sequelize = require('sequelize')
const db = require('../db')

const BeerStyle = db.define('beerStyle', {
  name: {
    type: Sequelize.STRING
  }
})

module.exports = BeerStyle
