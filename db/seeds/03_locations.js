exports.seed = function(knex) {
  return knex('locations').del()
  .then(() => {
    return knex('locations').insert(
      [
        {
          id: 1,
          name: 'Facebook Marketplace',
          url: 'https://apps.facebook.com/marketplace/selling',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          name: 'Offerup',
          url: 'https://offerup.com/',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          name: 'Poshmark',
          url: 'https://poshmark.com/',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 4,
          name: 'Craigslist',
          url: 'https://www.craigslist.org/',
          created_at: new Date(),
          updated_at: new Date()
        }
      ]
    )
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('locations_id_seq', (SELECT MAX(id) FROM locations));"
    )
  })
}
