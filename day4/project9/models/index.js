const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('NodeDB', 'yoga', '1234', {
    dialect: 'mssql',
    dialectOptions: {
      // Observe the need for this nested `options` field for MSSQL
      options: {
        // Your tedious options here
        useUTC: false,
        dateFirst: 1,
      },
    },
  });
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.products = require('./products')(sequelize, Sequelize);
module.exports = db;
