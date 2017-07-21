exports.seed = (knex) => {
  const tables = ['users']
  const clearIDs = tables.map(table => {
    return knex.raw(
      `SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`
    )
  })

  return knex('users').del()
    .then(() => Promise.all(clearIDs))
}
