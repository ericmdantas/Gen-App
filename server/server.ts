/// <reference path="./typings/tsd.d.ts" />

'use strict';

if ('production' === process.env.NODE_ENV)
    require('newrelic');

var PORT = process.env.PORT || 3333;

import * as express from 'express';
import * as os from 'os';
import * as http from 'http';
import {RoutesConfig} from './config/routes.conf';
import {DBConfig} from './config/db.conf';
import {Passport} from './config/passport';
import {Routes} from './routes/index';

const app = express();

RoutesConfig.init(app, express);
DBConfig.init();
Passport.init();
Routes.init(app, express.Router());

http.createServer(app)
    .listen(PORT, () => {
      console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
      console.log(`enviroment: ${process.env.NODE_ENV}`);
    });