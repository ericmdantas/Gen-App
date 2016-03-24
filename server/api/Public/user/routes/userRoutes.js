/// <reference path="../../../../typings/tsd.d.ts" />
System.register(['../controller/userController'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var userController_1;
    var UserRoutes;
    return {
        setters:[
            function (userController_1_1) {
                userController_1 = userController_1_1;
            }],
        execute: function() {
            UserRoutes = (function () {
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
            exports_1("UserRoutes", UserRoutes);
        }
    }
});
