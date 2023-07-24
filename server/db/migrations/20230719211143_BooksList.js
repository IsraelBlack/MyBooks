/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('books', (table)=> {
    table.increments('id')
    table.string('title')
    table.string('author')
    table.string('cover')
    table.integer('rating')
    table.string('summary')
    table.string('genre')
    table.string('opinion')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('books')
};
