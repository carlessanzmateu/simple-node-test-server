'use strict';
const express = require('express');
const app = express();
const log4js = require('log4js');
const logger = log4js.getLogger();
const mainRoutes = require('./controllers/main')(app, logger);
const server = require('./server')(app, logger);
