const makeCustomersDbInterface = require('./customers-db');
const makeCustomersDbMongo = require('../../infrastructure/database/parse-server/customer/customers-db');

const makeDb = async function () {
    const db = await makeCustomersDbMongo();
    return db;
}

const customersDb = makeCustomersDbInterface({ makeDb })
module.exports = customersDb;