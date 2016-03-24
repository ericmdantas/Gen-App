/// <reference path="../typings/tsd.d.ts" />
System.register(['../api/private/todo/routes/todo-routes'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var todo_routes_1;
    var User, Auth, passport, express, bodyParser, jwt, config, Routes;
    return {
        setters:[
            function (todo_routes_1_1) {
                todo_routes_1 = todo_routes_1_1;
            }],
        execute: function() {
            User = require('../api/public/user/model/userModel');
            Auth = require('../middleware/authorization.js');
            passport = require('passport');
            express = require('express');
            bodyParser = require("body-parser");
            jwt = require('jwt-simple');
            config = require('../config/db.conf');
            Routes = (function () {
                function Routes() {
                }
                Routes.init = function (app, router) {
                    router.route('/api/private/*', Auth.isAuthenticated);
                    todo_routes_1.TodoRoutes.init(router);
                    router
                        .route('*');
                    app.use('/', router);
                    app.use(bodyParser.urlencoded({ extended: false }));
                    app.use(bodyParser.json());
                    app.use(passport.initialize());
                    app.post("/signup", function (req, res, next) {
                        if (!req.body.email || !req.body.password) {
                            res.json({ success: false, msg: 'Please pass name and password.' });
                        }
                        else {
                            var newUser = new User({
                                firstName: req.body.firstName,
                                lasttName: req.body.lastName,
                                email: req.body.email,
                                password: req.body.password
                            });
                            // save the user
                            newUser.save(function (err) {
                                if (err) {
                                    console.log("error: " + err);
                                    return res.json({ success: false, msg: err });
                                }
                                res.json({ success: true, msg: 'Successfully created new user.' });
                            });
                        }
                    });
                    app.post("/authenticate", function (req, res) {
                        User.findOne({
                            email: req.body.email
                        }, function (err, user) {
                            if (err)
                                throw err;
                            if (!user) {
                                res.send({ success: false, msg: 'Authentication failed. User not found.' });
                            }
                            else {
                                // check if password matches
                                user.comparePassword(req.body.password, function (err, isMatch) {
                                    if (isMatch && !err) {
                                        // if user is found and password is right create a token
                                        var token = jwt.encode(user, config.secret);
                                        // return the information including token as JSON
                                        res.json({ success: true, token: 'JWT ' + token });
                                    }
                                    else {
                                        res.send({ success: false, msg: 'Authentication failed. Wrong password.' });
                                    }
                                });
                            }
                        });
                    });
                    app.get('/memberinfo', passport.authenticate('jwt', { session: false }), function (req, res) {
                        var token = getToken(req.headers);
                        if (token) {
                            var decoded = jwt.decode(token, config.secret);
                            User.findOne({
                                name: decoded.name
                            }, function (err, user) {
                                if (err)
                                    throw err;
                                if (!user) {
                                    console.log("User not found");
                                    return res.status(403).send({ success: false, msg: 'Authentication failed. User not found.' });
                                }
                                else {
                                    res.json({ success: true, msg: 'Welcome in the member area ' + user.name + '!' });
                                }
                            });
                        }
                        else {
                            return res.status(403).send({ success: false, msg: 'No token provided.' });
                        }
                    });
                    var getToken = function (headers) {
                        if (headers && headers.authorization) {
                            var parted = headers.authorization.split(' ');
                            if (parted.length === 2) {
                                return parted[1];
                            }
                            else {
                                return null;
                            }
                        }
                        else {
                            return null;
                        }
                    };
                };
                return Routes;
            }());
            exports_1("Routes", Routes);
            ;
        }
    }
});
