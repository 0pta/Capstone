exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        id: 1,
        first_name: 'Dragon',
        last_name: 'Lord',
        email: 'onTheDL@gmail.com',
        password: 'password1',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
      id: 2,
      first_name: 'Nacho',
      last_name: 'Libre',
      email: 'thelordschips@gmail.com',
      password: 'password2',
      created_at: new Date(),
      updated_at: new Date()
      },
      {
      id: 3,
      first_name: 'Carmin',
      last_name: 'Khalsa',
      email: 'chich@gmail.com',
      password: 'password3',
      created_at: new Date(),
      updated_at: new Date()
  }
])
  })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      )
    })
}
