const createNewAdmin = require('../../../entities/admin')
module.exports = function makeCreateAdmin({ adminsDb }) {
    return async function createAdmin(adminInfo) {
        const admin = createNewAdmin(adminInfo);
        const result = await adminsDb.insert(admin);
        result;
    }
}