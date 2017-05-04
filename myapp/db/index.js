const env = process.env.NODE_ENV || 'development';
const config = require('../knex')[env];
const knex = require('knex');

const connection = knex(config);

module.exports = connection;
