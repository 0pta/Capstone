exports.seed = function(knex) {
  return knex('items').del()
  .then(() => {
    return knex('items').insert(
      [
        {
          id: 1,
          category_id: '5',
          name: 'Shiny Sword',
          description: 'Kills: 13. All you need to know.',
          condition: 'Normal Wear',
          cost: 0,
          listed_price: 200,
          sold_price: 150,
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          category_id: '6',
          name: 'Bag of Chips',
          description: 'These are the Lord\'s chips',
          condition: 'Unopened',
          cost: 10,
          listed_price: 30,
          sold_price: 12,
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          category_id: '7',
          name: 'Licks',
          description: 'This is a service. Not sure I can sell services on here.',
          condition: 'Perfect',
          cost: 0,
          listed_price: 100,
          sold_price: 99,
          user_id: 3,
          created_at: new Date(),
          updated_at: new Date()
        }
      ]
    )
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('items_id_seq', (SELECT MAX(id) FROM items));"
    )
  })
}
