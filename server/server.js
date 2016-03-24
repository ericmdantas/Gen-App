/// <reference path="./typings/tsd.d.ts" />
System.register(['express', 'os', 'http', './config/routes.conf', './config/db.conf', './config/passport', './routes/index'], function(exports_1, context_1) {
    'use strict';
    var __moduleName = context_1 && context_1.id;
    var express, os, http, routes_conf_1, db_conf_1, passport_1, index_1;
    var PORT, app;
    return {
        setters:[
            function (express_1) {
                express = express_1;
            },
            function (os_1) {
                os = os_1;
            },
            function (http_1) {
                http = http_1;
            },
            function (routes_conf_1_1) {
                routes_conf_1 = routes_conf_1_1;
            },
            function (db_conf_1_1) {
                db_conf_1 = db_conf_1_1;
            },
            function (passport_1_1) {
                passport_1 = passport_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            if ('production' === process.env.NODE_ENV)
                require('newrelic');
            PORT = process.env.PORT || 3333;
            app = express();
            routes_conf_1.RoutesConfig.init(app, express);
            db_conf_1.DBConfig.init();
            passport_1.Passport.init();
            index_1.Routes.init(app, express.Router());
            http.createServer(app)
                .listen(PORT, function () {
                console.log("up and running @: " + os.hostname() + " on port: " + PORT);
                console.log("enviroment: " + process.env.NODE_ENV);
            });
        }
    }
});
