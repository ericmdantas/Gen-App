/// <reference path="../typings/tsd.d.ts" />
"use strict";
var todo_routes_1 = require('../api/private/todo/routes/todo-routes');
var index_1 = require('../commons/static/index');
var User = require('../api/public/user/model/userModel');
var Auth = require('../middleware/authorization.js');
var passport = require('passport');
var Routes = (function () {
    function Routes() {
    }
    Routes.init = function (app, router) {
        router.route('/api/private/*'); //here goes the passport auth
        todo_routes_1.TodoRoutes.init(router);
        router
            .route('*')
            .get(index_1.StaticDispatcher.sendIndex);
        app.use('/', router);
        app.get("/", function (req, res) {
            if (req.isAuthenticated()) {
                res.render("home", { user: req.user });
            }
            else {
                res.render("home", { user: null });
            }
        });
        app.get("/login", function (req, res) {
            res.render("login");
        });
        app.post("/login", passport.authenticate('local', {
            successRedirect: "/",
            failureRedirect: "/login",
        }));
        app.get("/signup", function (req, res) {
            res.render("signup");
        });
        app.post("/signup", Auth.userExist, function (req, res, next) {
            User.signup(req.body.email, req.body.password, function (err, user) {
                if (err)
                    throw err;
                req.login(user, function (err) {
                    if (err)
                        return next(err);
                    return res.redirect("profile");
                });
            });
        });
        app.get("/profile", Auth.isAuthenticated, function (req, res) {
            res.render("profile", { user: req.user });
        });
        app.get('/logout', function (req, res) {
            req.logout();
            res.redirect('/login');
        });
    };
    return Routes;
}());
exports.Routes = Routes;
;
