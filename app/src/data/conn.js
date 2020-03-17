var Sequelize = require('sequelize');

const sequelize = new Sequelize('ewt', 'admin', 'admin', {
  host: '127.0.0.1',
  port: 3306,
  dialect: 'mysql',
  timezone: '+08:00',
  logging: false,
  define: {
    charset: 'utf8'
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize;