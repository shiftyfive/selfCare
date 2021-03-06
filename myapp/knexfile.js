const path = require('path');

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/self_care',
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds'),
    },
    debug: true,
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations'),
    },
    seeds: {
      direcotry: path.join(__dirname, 'db', 'seeds'),
    },
  },
};
