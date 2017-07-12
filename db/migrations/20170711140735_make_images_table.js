exports.up = function(knex) {
  return knex.schema.createTable('images', (table) => {
    table.increments()
    table.integer('item_id')
    table.string('img_url').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('images')
}
