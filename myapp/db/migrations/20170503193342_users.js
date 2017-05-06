exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('email').unique().notNullable();
    table.specificType('hashed_password', 'char(60)').notNullable();
  });
};

exports.down = knex => knex.schema.dropTable('users');
