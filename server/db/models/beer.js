'use strict';

const Sequelize = require('sequelize');
const db = require('./_db');

const Beer = db.define('beer', {
   name: {
       type: Sequelize.STRING,
       allowNull: false
    },
   brand: {
       type: Sequelize.STRING,
       allowNull: false
    },
    description:{
        type: SEQUELIZE.TEXT,
        allowNull: false
    },
    inventory:{
        type: SEQUELIZE.INTEGER,
        allowNull: false
    },
    imageUrl:{
        type: Sequelize.STRING,
        defaultValue: 'https://cdn1.wine-searcher.net/images/labels/89/86/stillwater-artisanal-extra-dry-sake-saison-beer-maryland-usa-10928986.jpg'
    },
    type:{
        type: Sequelize.STRING,
        allowNull: false
    },
    price:{
        type: SEQUELIZE.INTEGER,
        allowNull: false
    },
    ABV:{
        type: SEQUELIZE.INTERGER,
        allowNull: false

    },
    packSize:{
        type: SEQUELIZE.ENUM,
        allowNull: false

    }

});



module.exports = Beer;

