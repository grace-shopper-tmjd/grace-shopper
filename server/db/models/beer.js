'use strict'

const Sequelize = require('sequelize')
const db = require('../db')

const Beer = db.define('beer', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  brand: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  inventory: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 100
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true,
      notEmpty: true
    },
    defaultValue: `https://cdn1.wine-searcher.net/images/labels/89/86/stillwater-artisanal-extra-dry-sake-saison-beer-maryland-usa-10928986.jpg`
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  },
  ABV: {
    type: Sequelize.DECIMAL(10, 1),
    allowNull: false
  },
  packSize: {
    type: Sequelize.ENUM('1 pack', '4 pack', '6 pack'),
    allowNull: false
  }
})

module.exports = Beer
