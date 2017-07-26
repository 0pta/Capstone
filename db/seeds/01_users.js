exports.seed = function(knex) {
  return knex('users').del()
  .then(() => {
    return knex('users').insert(
      [
        {
          id: 1,
          first_name: 'Dragon',
          last_name: 'Lord',
          email: 'onTheDL@gmail.com',
          password: '$2a$10$dXAFn8hRzygvCkeXyir5U.HnFBxpmGeUqckI.fpUVptlLGmsXKGw.', //password1
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          first_name: 'Nacho',
          last_name: 'Libre',
          email: 'thelordschips@gmail.com',
          password: '$2a$10$cjL7pNPI3Ndy9PcrurbTaulvdatNqFfZ7IwG1D5wA0yKtZE1XMfDW', //password2
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          first_name: 'Carmin',
          last_name: 'Khalsa',
          email: 'chich@gmail.com',
          password: '$2a$10$rKZk0RcuTePW2RRawV.equf00kalH4Bb7I6KZPL1R5pDcnWrsrNfm', //password3
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 4,
          first_name: 'Sim',
          last_name: 'K',
          email: 'sim_khalsa052@gmail.com',
          password: '$2a$10$dXAFn8hRzygvCkeXyir5U.HnFBxpmGeUqckI.fpUVptlLGmsXKGw.', //password1
          created_at: new Date(),
          updated_at: new Date()
        },
      ])
  }).then(() => {
    return knex.raw(
      `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`
    )
  })
}
