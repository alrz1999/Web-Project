const createNewAdmin = require('../../../entities/admin')
module.exports = function makeCreateAdmin({ adminsDb }) {
    return async function createAdmin(adminInfo) {
        const admin = createNewAdmin(adminInfo);
        const exists = await adminsDb.find();
    }
}