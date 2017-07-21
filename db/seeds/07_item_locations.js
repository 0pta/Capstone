exports.seed = function(knex) {
  return knex('item_locations').del()
  .then(() => {
    return knex('item_locations').insert(
      [
        {
          id: 1,
          item_id: 1,
          location_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          item_id: 1,
          location_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          item_id: 1,
          location_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 4,
          item_id: 2,
          location_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 5,
          item_id: 2,
          location_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 6,
          item_id: 2,
          location_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 7,
          item_id: 3,
          location_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 8,
          item_id: 3,
          location_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 9,
          item_id: 4,
          location_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 10,
          item_id: 4,
          location_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        }
      ]
    )
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('item_locations_id_seq', (SELECT MAX(id) FROM item_locations));"
    )
  })
}
