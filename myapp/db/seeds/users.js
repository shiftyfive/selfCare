
exports.seed = knex => knex('users').del()

  .then(() => knex('users').insert([
    {
      id: 1,
      email: 'joshuawarren000@gmail.com',
      hashed_password: '$2a$10$B81FnJVOQPow3aBl6ji6T.ZG8IZi1z2XFTeQVXbQUTlCXWbMWJEvK', //password
    },
  ]))

  .then(() => knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"));
