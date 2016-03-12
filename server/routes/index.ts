/// <reference path="../typings/main.d.ts" />

import {TodoRoutes} from '../api/private/todo/routes/todo-routes';
import {UserRoutes} from '../api/public/user/routes/userRoutes';
import {StaticDispatcher} from '../commons/static/index';

export class Routes {
   static init(app:Object, router:Object) {
     TodoRoutes.init(router);

     router
       .route('*')
       .get(StaticDispatcher.sendIndex);

     app.use('/', router);
   }
}
