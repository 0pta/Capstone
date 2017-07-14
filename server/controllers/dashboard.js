const items = require('../models/items.js')



function getAllItems (req, res, next) {
  items.getItems()
  .then(items => {
    res.json(items)
  })
  .catch(err => next(err))
}

function getAllImages (req, res, next) {
  items.getImages()
  .then(images => {
    res.json(images)
  })
  .catch(err => next(err))
}

module.exports = { getAllItems, getAllImages }
