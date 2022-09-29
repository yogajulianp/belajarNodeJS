const { Sequelize, DataTypes } = require('sequelize');
//drive sqilte

const sequelize = new Sequelize('sqlite::memory');
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.todos = require('./todo')(sequelize, Sequelize);
module.exports = db;
