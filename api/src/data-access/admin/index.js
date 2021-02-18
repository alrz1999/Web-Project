const makeAdminsDbInterface = require('./admins-db');
const makeAdminsDb_parse = require('../../infrastructure/database/parse-server/admin/admins-db');

const makeDb = async function () {
    const db = await makeAdminsDb_parse();
    return db;
}

const adminsDb = makeAdminsDbInterface({ makeDb })
module.exports = adminsDb;