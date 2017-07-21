const express = require('express')
const router = express.Router()
const knex = require('../../db/knex')
const index = require('../controllers/index')
const items = require('../controllers/items')
const { isLoggedIn, isAuthorized } = require('../lib/auth')


router.get('/items', isLoggedIn, isAuthorized, index.getAllItems)
router.get('/images', isLoggedIn, isAuthorized, index.getAllImages)
router.get('/images/:id', isLoggedIn, isAuthorized, items.getOneImages)
router.get('/locations', isLoggedIn, index.getAllLocations)
router.get('/itemLocations', isLoggedIn, isAuthorized, index.getAllItemLocations)
router.get('/categories', isLoggedIn, isAuthorized, index.getAllCategories)
router.get('/items/:id', isLoggedIn, isAuthorized, items.getOneItem)
router.post('/items', isLoggedIn, isAuthorized, items.create)
router.delete('/items/:id', isLoggedIn, isAuthorized, items.deleteOneItem)

module.exports = router
