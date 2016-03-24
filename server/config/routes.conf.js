/// <reference path="../typings/tsd.d.ts" />
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var bodyParser, morgan, contentLength, helmet, RoutesConfig;
    return {
        setters:[],
        execute: function() {
            bodyParser = require('body-parser');
            morgan = require('morgan');
            contentLength = require('express-content-length-validator');
            helmet = require('helmet');
            RoutesConfig = (function () {
                function RoutesConfig() {
                }
                RoutesConfig.init = function (application, exp) {
                    var _clientFiles = (process.env.NODE_ENV === 'production') ? '/client/dist/' : '/client/dev/';
                    var _root = process.cwd();
                    application.use(exp.static(_root));
                    application.use(exp.static(_root + _clientFiles));
                    application.use(bodyParser.json());
                    application.use(morgan('dev'));
                    application.use(contentLength.validateMax({ max: 999 }));
                    application.use(helmet());
                };
                return RoutesConfig;
            }());
            exports_1("RoutesConfig", RoutesConfig);
        }
    }
});
