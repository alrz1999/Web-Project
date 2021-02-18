const makeDb = require('../');
const customersDb = require('./customers-db');

module.exports = customersDb(makeDb);