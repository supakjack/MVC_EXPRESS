const config = require('../config/db')
config.dbc()
const User = require('../models/userModel')

module.exports = {
    getUsers: function (req, res, next) {
        User.find().sort({ created_date: -1 }).exec((err, data) => {
            if (err) {
                return res.status(500).send({ err: { message: err.message, code: err.code } })
            }
            res.status(200).send(data)
        })
    },
    createUser: function (req, res, next) {
        var user = new User(req.body)
        user.save((err, data) => {
            if (err) {
                return res.status(500).send({ err: { message: err.message, code: err.code } })
            }
            res.status(200).send({ success: { message: "Create user successfully" } })
        })
    },
    getUserById: function (req, res, next) {
        User.findById(req.params._id).exec((err, data) => {
            if (err) {
                return res.status(500).send({ err: { message: err.message, code: err.code } })
            }
            res.status(200).send(data)
        })
    },
    editUser: function (req, res, next) {
        User.findByIdAndUpdate(req.params._id, req.body, (err, data) => {
            if (err) {
                return res.status(500).send({ err: { message: err.message, code: err.code } })
            }
            res.status(200).send({ success: { message: "Update user successfully" } })
        })
    },
    deleteUserById: function (req, res, next) {
        User.findByIdAndRemove(req.params._id).exec((err, data) => {
            if (err) {
                return res.status(500).send({ err: { message: err.message, code: err.code } })
            }
            res.status(200).send({ success: { message: "Delete user successfully" } })
        })
    }
}