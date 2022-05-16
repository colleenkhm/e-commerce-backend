// https://still-oasis-44957.herokuapp.com/

const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
  });

module.exports = sequelize;
