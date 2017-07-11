exports.up = function(knex) {
  return knex.schema.createTable('items', (table) => {
    table.increments()
    table.string('name').notNullable().defaultTo('')
    table.string('img_url').notNullable()
    table.text('description').notNullable().defaultTo('')
    table.integer('cost')
    table.integer('profit')
    table.integer('listed_price')
    table.integer('sold_price')

    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('items')
}
