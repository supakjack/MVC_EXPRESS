const express = require('express')
const router = express.Router()
const controller = require('../controllers/UserController')

router.get('/',controller.getUsers)
router.get('/:_id',controller.getUserById)
router.delete('/:_id',controller.deleteUserById)
router.post('/',controller.createUser)
router.put('/:_id',controller.editUser)

module.exports = router
