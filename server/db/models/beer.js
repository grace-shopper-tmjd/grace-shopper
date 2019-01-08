'use strict'

const Sequelize = require('sequelize')
const db = require('../db')

const Beer = db.define('beer', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  brand: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  inventory: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://cdn1.wine-searcher.net/images/labels/89/86/stillwater-artisanal-extra-dry-sake-saison-beer-maryland-usa-10928986.jpg'
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  ABV: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  packSize: {
    type: Sequelize.ENUM('1 pack', '6 pack', '12 pack', '24 pack', '36 pack'),
    allowNull: false
  }
})

module.exports = Beer
