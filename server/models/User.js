const Resource = require('./_Resource')('users')
const bcrypt = require('bcrypt-as-promised')
const knex = require('../../db/knex')

class User extends Resource {
  static create (body) {
    const { email, password } = body

    if (!email || !password) return Promise.reject({ status: 422, message: 'Email and password required.' })

    return bcrypt.hash(password).then(password => super.create({ email, password }))
  }

  static findByEmail (email) {
    return knex('users').where({ email }).first()
  }
}

module.exports = User
