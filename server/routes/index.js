const express = require('express')
const router = express.Router()
const knex = require('../../db/knex')
const items = require('../controllers/dashboard')

/* GET home page. */
router.get('/items', items.getAllItems)
router.get('/images', items.getAllImages)

module.exports = router
