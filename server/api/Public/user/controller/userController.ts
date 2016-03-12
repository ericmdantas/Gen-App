/// <reference path="../../../../typings/tsd.d.ts" />

var User = require ('../model/userModel');

export class UserController {
  static getAll(req:Object, res:Object):void {
      User
        .getAll()
        .then(users => res.status(200).json(users))
        .catch(error => res.status(400).json(error));
  }

  static createUser(req:Object, res:Object):void {
      let _user = req.body;

      User
        .createUser(_user)
        .then(user => res.status(201).json(user))
        .catch(error => res.status(400).json(error));
  }

  static deleteUser(req:Object, res:Object):void {
    let _id = req.params.id;

    User
      .deleteUser(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}