const knex = require('../../db/knex')

function ResourceFactory (table) {
  class Resource {
    constructor () {}

    static all () {
      return knex(table)
    }

    static findById (id) {
      return knex(table).where({ id }).first()
    }

    static create (body) {
      return knex(table).insert(body).returning('*')
    }

    static update (id, body) {
      return knex(table).update(body).where({ id }).returning('*')
    }

    static destroy (id) {
      return knex(table).del().where({ id }).returning('*')
    }
  }

  return Resource
}

module.exports = ResourceFactory
