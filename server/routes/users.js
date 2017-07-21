const express = require('express')
const router = express.Router()
const { users: ctrl } = require('../controllers')
const { isLoggedIn, isAuthorized } = require('../lib/auth')

router.get('/', ctrl.index)
router.get('/:id', isLoggedIn, isAuthorized, ctrl.show)
router.get('/:id/items', isLoggedIn, isAuthorized, ctrl.getItemsByUserId)
router.get('/:id/items/:itemid', isLoggedIn, isAuthorized, ctrl.getOneItemByUserId)
router.post('/', ctrl.create)

module.exports = router
