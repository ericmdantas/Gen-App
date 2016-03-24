System.register(['./db.conf'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var db_conf_1;
    var passport, JwtStrategy, User, Passport;
    return {
        setters:[
            function (db_conf_1_1) {
                db_conf_1 = db_conf_1_1;
            }],
        execute: function() {
            passport = require('passport');
            JwtStrategy = require('passport-jwt').Strategy;
            User = require('../api/public/user/model/userModel');
            Passport = (function () {
                function Passport() {
                }
                Passport.init = function () {
                    var JwtStrategy = require('passport-jwt').Strategy, ExtractJwt = require('passport-jwt').ExtractJwt;
                    var opts = {};
                    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
                    opts.secretOrKey = db_conf_1.DBConfig.secret;
                    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
                        User.findOne({ id: jwt_payload.sub }, function (err, user) {
                            if (err) {
                                return done(err, false);
                            }
                            if (user) {
                                done(null, user);
                            }
                            else {
                                done(null, false);
                            }
                        });
                    }));
                };
                return Passport;
            }());
            exports_1("Passport", Passport);
            ;
        }
    }
});
