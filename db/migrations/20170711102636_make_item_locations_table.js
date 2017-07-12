exports.up = function(knex) {
  return knex.schema.createTable('item_locations', (table) => {
    table.increments()
    table.integer('item_id').references('items.id').onDelete('CASCADE')
    table.integer('location_id').references('locations.id').onDelete('CASCADE')
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('item_locations')
}
