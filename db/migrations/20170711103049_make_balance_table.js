exports.up = function(knex) {
  return knex.schema.createTable('balance', (table) => {
    table.increments()
    table.integer('user_id')
    table.integer('total_incoming')
    table.integer('total_outgoing')
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('balance')
}
