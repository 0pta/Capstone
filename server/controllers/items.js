const Item = require('../models/items.js')
// const { User } = require('../models')

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
    newItem.img_urls = imgArr
    newItem.cover_url = imgArr[0]
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
      delete newItem.img_url
      res.json(newItem)
    })
  })
  .catch(err => next(err))
}

function getOneImages (req, res, next) {
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
    res.json(newItem)
  })
  .catch(err => next(err))
}

function create (req, res, next) {
  Item.create(req.body).then(([item]) => res.json(`/items/${item.id}`))
}

function addImages (req, res, next) {
  Item.addImages(req.body).then(([image]) => res.json(`/images/${image.id}`))
}

//this deletes from item table only
function deleteOneItem (req, res, next) {
  const id = req.params.id
  Item.destroy(id)
  .then(() => {
    res.send('Deleted')
  })
}



module.exports = { getOneItem, getOneImages, create, deleteOneItem, addImages }
