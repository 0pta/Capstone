const knex = require('../../db/knex')

class Items {
  constructor() {
  }

  static getItems () {
    return knex('items').select('*')
  }

  static getImages () {
    return knex('images').select('*')
  }

}

module.exports = Items
