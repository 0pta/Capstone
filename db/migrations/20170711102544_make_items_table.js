exports.up = function(knex) {
  return knex.schema.createTable('items', (table) => {
    table.increments()
    table.integer('category_id')
    table.string('name').notNullable().defaultTo('')
    table.text('description_caption').defaultTo('')
    table.text('description').notNullable().defaultTo('')
    table.string('condition').notNullable().defaultTo('')
    table.integer('cost')
    table.integer('value')
    table.integer('listed_price')
    table.integer('sold_price')
    table.integer('user_id')

    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('items')
}
