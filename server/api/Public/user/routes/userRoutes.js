/// <reference path="../../../typings/main.d.ts" />
"use strict";
var userController_1 = require('../controller/userController');
var UserRoutes = (function () {
    function UserRoutes() {
    }
    UserRoutes.init = function (router) {
        router
            .route('/api/public/users')
            .get(userController_1.UserController.getAll)
            .post(userController_1.UserController.createUser);
        router
            .route('/api/public/users/:id')
            .delete(userController_1.UserController.deleteUser);
    };
    return UserRoutes;
}());
exports.UserRoutes = UserRoutes;
