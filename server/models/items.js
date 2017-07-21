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
    return knex('categories').select('*')
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

  static getOneItemCategory (id) {
    return knex('items')
    .select('categories.*')
    .innerJoin('categories', 'items.category_id', 'categories.id')
    .where('items.id', id).first()
  }

  static create (body) {
    return knex('items').insert(body).returning('*')
  }

  static destroy (id) {
    // NOTE: need to keep item data for stats.
    return knex('items').where({ id }).del()
    // needs to delete associated images also
  }

  //BY USER

  static getItemsByUserId (id) {
    return knex('items').where('user_id', id)
    // .innerJoin('images', 'items.id', 'images.item_id')
    // .innerJoin('categories', 'items.category_id', 'categories.id')
    // .innerJoin('item_locations', 'items.id', 'item_locations.item_id')
    // .innerJoin('locations', 'locations.id', 'item_locations.location_id')

  }

}

module.exports = Item
