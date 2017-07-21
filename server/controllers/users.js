const Item = require('../models/items.js')
const { User } = require('../models')

function index (req, res, next) {
  User.all().then(users => res.json({ users })).catch(next)
}

function show (req, res, next) {
  const id = req.params.id
  User.findById(id).then(user => res.json({ user })).catch(next)
}

function create (req, res, next) {
  const body = req.body
  User.create(body).then(([user]) => res.json({ user })).catch(next)
}

function getItemsByUserId (req, res, next) {
  console.log(req.params);
  const id = req.params.id
  Item.getItemsByUserId(id)
  .then(items => {
    res.json(items)
  })
  .catch(err => next(err))
}

function getOneItemByUserId (req, res, next) {
  const id = req.params.itemid
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

module.exports = {
  index, show, create, getItemsByUserId, getOneItemByUserId
}
