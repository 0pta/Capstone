const express = require('express')
const router = express.Router()
const knex = require('../db/knex')

/* GET home page. */
router.get('/', (req, res) => {
  res.send('Simventory! Capstone Project')
})

module.exports = router
