const createNewAdmin = require('../../../entities/admin')
module.exports = function makeDeleteAdmin({ adminsDb }) {
    return async function deleteAdmin(id) {
        const result = await adminsDb.remove(id);
        return result;
    }
}