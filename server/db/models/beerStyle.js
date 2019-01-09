'use strict'

const Sequelize = require('sequelize')
const db = require('../db')

const BeerStyle = db.define('beerstyle', {
  IPA: {
    type: Sequelize.STRING
  },
  Lager: {
    type: Sequelize.STRING
  },
  Stout_Porter: {
    type: Sequelize.STRING
  },
  Pilsner: {
    type: Sequelize.STRING
  }
})

module.exports = BeerStyle
