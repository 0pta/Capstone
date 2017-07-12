exports.seed = function(knex) {
  return knex('categories').del()
  .then(() => {
    return knex('categories').insert(
      [
        {
          id: 1,
          name: 'Furniture',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          name: 'Electronics',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          name: 'Bathroom',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 4,
          name: 'Sports',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 5,
          name: 'Weapons',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 6,
          name: 'Food',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 7,
          name: 'Services',
          created_at: new Date(),
          updated_at: new Date()
        }
      ]
    )
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('categories_id_seq', (SELECT MAX(id) FROM categories));"
    )
  })
}
