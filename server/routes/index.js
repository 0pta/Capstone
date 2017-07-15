const express = require('express')
const router = express.Router()
const knex = require('../../db/knex')
const items = require('../controllers/dashboard')
const itemDetails = require('../controllers/items')
/* GET dashboard. */
router.get('/items', items.getAllItems)
router.get('/images', items.getAllImages)
router.get('/locations', items.getAllLocations)
router.get('/itemLocations', items.getAllItemLocations)
router.get('/items/:id', itemDetails.getOneItem)
router.post('/items', itemDetails.create)

module.exports = router
