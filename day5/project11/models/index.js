const { Sequelize, DataTypes } = require('sequelize');
//drive sqilte
//const sequelize = new Sequelize('sqlite::memory');

//sql server
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

db.todos = require('./todo')(sequelize, Sequelize);
db.users = require('./users')(sequelize, Sequelize);


module.exports = db;
