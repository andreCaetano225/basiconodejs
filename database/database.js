const Sequelize = require('sequelize');

const connection = new Sequelize('pergunta','root','admin', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;

