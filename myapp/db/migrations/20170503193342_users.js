exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments
    table.string('username').notNullable()
    table.specificType('hashed_password', 'char(60)')
  })
};
