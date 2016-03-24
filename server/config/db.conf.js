/// <reference path="../typings/tsd.d.ts" />
System.register(['mongoose'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var mongoose;
    var dbConst, DBConfig;
    return {
        setters:[
            function (mongoose_1) {
                mongoose = mongoose_1;
            }],
        execute: function() {
            dbConst = require('../constants/db.json');
            DBConfig = (function () {
                function DBConfig() {
                }
                DBConfig.init = function () {
                    var URL = (process.env.NODE_ENV === 'production') ? process.env.MONGOHQ_URL
                        : dbConst.localhost;
                    mongoose.connect(URL);
                    mongoose.connection.on('error', console.error.bind(console, 'An error ocurred with the DB connection: '));
                };
                DBConfig.secret = 'genappisawesome';
                return DBConfig;
            }());
            exports_1("DBConfig", DBConfig);
            ;
        }
    }
});
