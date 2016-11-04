'use strict';

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test-data');

module.exports =  mongoose.connection;
