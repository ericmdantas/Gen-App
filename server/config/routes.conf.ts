/// <reference path="../typings/tsd.d.ts" />

"use strict";

var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var contentLength = require('express-content-length-validator');
var helmet = require('helmet');

export class RoutesConfig {
    static init(application:Object, exp:Object):void {
        let _clientFiles = (process.env.NODE_ENV === 'production') ? '/client/dist/' : '/client/dev/';
        let _root = process.cwd();

        application.use(exp.static(_root));
        application.use(exp.static(_root + _clientFiles));
        application.use(bodyParser.json());
        application.use(morgan('dev'));
        application.use(contentLength.validateMax({max: 999}));
        application.use(helmet());
    }
}
