const express = require('express')
const router = express.Router()
const knex = require('../db/knex')

/* GET users listing. */
router.get('/', function (req, res, next) {
  knex('items').select('*').then(items => {
    res.json({ items })
  })
})

module.exports = router
