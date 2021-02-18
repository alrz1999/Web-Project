const makeDb = require('../');
const doctorsDb = require('./doctors-db');

module.exports = doctorsDb(makeDb);