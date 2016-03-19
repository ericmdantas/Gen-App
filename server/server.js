/// <reference path="./typings/tsd.d.ts" />
'use strict';
if ('production' === process.env.NODE_ENV)
    require('newrelic');
var PORT = process.env.PORT || 3333;
var express = require('express');
var os = require('os');
var routes_conf_1 = require('./config/routes.conf');
var db_conf_1 = require('./config/db.conf');
var passport_1 = require('./config/passport');
//var passport = require('./config/passport');
var index_1 = require('./routes/index');
var app = express();
var server = app.listen(PORT);
routes_conf_1.RoutesConfig.init(app, express);
db_conf_1.DBConfig.init();
passport_1.Passport.init();
index_1.Routes.init(app, express.Router());
console.log("up and running @: " + os.hostname() + " on port: " + PORT);
console.log("enviroment: " + process.env.NODE_ENV);
