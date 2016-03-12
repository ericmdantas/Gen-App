/// <reference path="../../../typings/main.d.ts" />
"use strict";
var userDao_1 = require('../dao/userDao');
var UserController = (function () {
    function UserController() {
    }
    UserController.getAll = function (req, res) {
        userDao_1.default
            .getAll()
            .then(function (users) { return res.status(200).json(users); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    UserController.createUser = function (req, res) {
        var _user = req.body;
        userDao_1.default
            .createUser(_user)
            .then(function (user) { return res.status(201).json(user); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    UserController.deleteUser = function (req, res) {
        var _id = req.params.id;
        userDao_1.default
            .deleteUser(_id)
            .then(function () { return res.status(200).end(); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    return UserController;
}());
exports.UserController = UserController;
