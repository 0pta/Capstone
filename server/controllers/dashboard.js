const Item = require('../models/items.js')


// ----- GET all refactorable ----- //
function getAllItems (req, res, next) {
  Item.getItems()
  .then(items => {
    res.json(items)
  })
  .catch(err => next(err))
}

function getAllImages (req, res, next) {
  Item.getImages()
  .then(images => {
    res.json(images)
  })
  .catch(err => next(err))
}

function getAllLocations (req, res, next) {
  Item.getLocations()
  .then(locations => {
    res.json(locations)
  })
  .catch(err => next(err))
}

function getAllItemLocations (req, res, next) {
  Item.getAllItemLocations()
  .then(itemLocations => {
    res.json(itemLocations)
  })
  .catch(err => next(err))
}

function getAllCategories (req, res, next) {
  Item.getCategories()
  .then(categories => {
    res.json(categories)
  })
  .catch(err => next(err))
}
// ----- GET all refactorable ----- //




module.exports = { getAllItems, getAllImages, getAllLocations, getAllItemLocations, getAllCategories }
