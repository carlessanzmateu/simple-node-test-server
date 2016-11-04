'use strict'

const db = require('./dao/database/database-connector');

db.on('error', console.error.bind(console, 'connection error:'));

function getAllDragons() {

}
