/// <reference path="../typings/main.d.ts" />

'use strict';

if ('production' === process.env.NODE_ENV)
    require('newrelic');

var PORT = process.env.PORT || 3333;

import * as express from 'express';

import * as os from 'os';
import {RoutesConfig} from './config/routes.conf';
import {DBConfig} from './config/db.conf';
import {Routes} from './routes/index';
import {bodyParser} from 'body-parser';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
import {passport} from 'passport';

const app = express();
const server = app.listen(PORT);

RoutesConfig.init(app, express);
DBConfig.init();
Routes.init(app, express.Router());

app.use(passport.initialize());
console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
console.log(`enviroment: ${process.env.NODE_ENV}`);