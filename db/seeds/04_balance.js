exports.seed = function(knex) {
  return knex('balance').del()
  .then(() => {
    return knex('balance').insert(
      [
        {
          id: 1,
          user_id: 1,
          total_outgoing: 0,
          total_incoming: 300,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          user_id: 2,
          total_outgoing: 50,
          total_incoming: 100,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          user_id: 3,
          total_outgoing: 3000,
          total_incoming: 10000,
          created_at: new Date(),
          updated_at: new Date()
        }
      ]
    )
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('balance_id_seq', (SELECT MAX(id) FROM balance));"
    )
  })
}
