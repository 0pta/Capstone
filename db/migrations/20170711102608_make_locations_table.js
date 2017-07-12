exports.up = function(knex) {
  return knex.schema.createTable('locations', (table) => {
    table.increments()
    table.string('name').notNullable().defaultTo('')
    table.text('url').notNullable().defaultTo('')
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('locations')
}
