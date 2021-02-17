const createNewAdmin = require('../../../entities/admin')
module.exports = function makeDeleteAdmin({ adminsDb }) {
    return async function deleteAdmin(id) {
        const admin = createNewAdmin(adminInfo);
        const exists = await adminsDb.();
    }
}