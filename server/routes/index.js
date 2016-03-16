/// <reference path="../typings/tsd.d.ts" />
"use strict";
var todo_routes_1 = require('../api/private/todo/routes/todo-routes');
var index_1 = require('../commons/static/index');
var User = require('../api/public/user/model/userModel');
var Auth = require('../middleware/authorization.js');
var passport = require('passport');
var bodyParser = require("body-parser");
var Routes = (function () {
    function Routes() {
    }
    Routes.init = function (app, router) {
        router.route('/api/private/*', Auth.isAuthenticated); //here goes the passport auth parameter...
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
        app.use("/signup", bodyParser.urlencoded({ extended: false }));
        app.post("/signup", Auth.userExist, function (req, res, next) {
            if (!req.body.email || !req.body.password) {
                res.json({ success: false, msg: 'Please pass name and password.' });
                console.log("email: " + res.body.email);
                console.log("password: " + req.body.password);
            }
            else {
                var newUser = new User({
                    firstName: req.body.firstName,
                    lasttName: req.body.lastName,
                    email: req.body.email,
                    password: req.body.password
                });
                // save the user
                console.log("about to save");
                console.log("email: " + newUser.email);
                newUser.save(function (err) {
                    if (err) {
                        console.log("error");
                        return res.json({ success: false, msg: err });
                    }
                    res.json({ success: true, msg: 'Successful created new user.' });
                });
            }
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
