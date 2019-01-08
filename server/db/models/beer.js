'use strict';

const Sequelize = require('sequelize');
const db = require('./_db');

const Beer = db.define('beer', {
   title: {
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
    imageUrl:{
        type: Sequelize.STRING,
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

