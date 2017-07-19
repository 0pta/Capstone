const express = require('express')
const router = express.Router()
const knex = require('../../db/knex')
const index = require('../controllers/index')
const items = require('../controllers/items')


router.get('/items', index.getAllItems)
router.get('/images', index.getAllImages)
router.get('/images/:id', items.getOneImages)
router.get('/locations', index.getAllLocations)
router.get('/itemLocations', index.getAllItemLocations)
router.get('/categories', index.getAllCategories)
router.get('/items/:id', items.getOneItem)
router.post('/items', items.create)
router.delete('/items/:id', items.deleteOneItem)

module.exports = router
