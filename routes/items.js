const express = require('express')
const router = express.Router()
const knex = require('../db/knex')

/* GET users listing. */
router.get('/', (req, res, next) => {
  knex('items')
  .then(items => {
    res.render('items', {items})
  })
})

module.exports = router
