/// <reference path="../../../../typings/tsd.d.ts" />

"use strict";

import {UserController} from '../controller/userController';

export class UserRoutes {
    static init(router) {
      router
        .route('/api/public/users')
        .get(UserController.getAll)
        .post(UserController.createUser);

      router
        .route('/api/public/users/:id')
        .delete(UserController.deleteUser);
    }
}
