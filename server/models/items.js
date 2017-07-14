const knex = require('../../db/knex')

class Item {
  constructor() {
  }

  // ----- GET all refactorable ----- //
  static getItems () {
    return knex('items').select('*')
  }

  static getImages () {
    return knex('images').select('*')
  }

  static getLocations () {
    return knex('locations').select('*')
  }

  static getItemLocations () {
    return knex('item_locations').select('*')
  }

  static getCategories () {
    return knex('categoties').select('*')
  }
  // ----- GET all refactorable ----- //


  static getOneItemImages (id) {
    return knex('items')
    .innerJoin('images', 'items.id', 'images.item_id')
    .where('items.id', id)
  }

  static getOneItemLocations (id) {
    return knex('locations')
    .innerJoin('item_locations', 'item_locations.location_id', 'locations.id')
    .where('item_locations.item_id', id)
  }

}

module.exports = Item
