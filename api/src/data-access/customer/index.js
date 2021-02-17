const makeCustomersDbInterface = require('./customers-db');
const makeCustomersDb_parse = require('../../infrastructure/database/parse-server/customer/customers-db');

const makeDb = async function () {
    const db = await makeCustomersDb_parse();
    return db;
}

const customersDb = makeCustomersDbInterface({ makeDb })
module.exports = customersDb;