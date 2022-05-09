const express = require('express');
const routes = require('./routes');
const mysql = require('mysql2');
const sequelize = require('sequelize');
require('dotenv').config();
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
// error saying sequelize.sync is not a function
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
