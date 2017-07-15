const Item = require('../models/items.js')

function getOneItem (req, res, next) {
  const id = req.params.id
  let newItem;
  Item.getOneItemImages(id)
  .then(result => {
    newItem = result[0]
    let imgArr = []
    result.forEach(obj => {
      imgArr.push(obj.img_url)
    })
    newItem.img_url = imgArr
    return Item.getOneItemLocations(id)
  }).then(result => {
    let locations = []
    result.forEach(obj => {
      locations.push(obj)
    })
    newItem.locations = locations
    return Item.getOneItemCategory(id)
    .then(result => {
      newItem.category = result.name
      res.json(newItem)
    })
  })
  .catch(err => next(err))
}

function create (req, res, next) {
  Item.create(req.body).then(([item]) => res.json(`/items/${item.id}`))
}

function destroyOneItem (req, res, next) {
  const id = req.params.id
}



module.exports = { getOneItem, create }
