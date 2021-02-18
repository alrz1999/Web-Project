const createNewAdmin = require('../../../entities/admin')
module.exports = function makeListAdmins({ adminsDb }) {
    return async function listAdmins() {
        const result = await adminsDb.findAll();
        return result;
    }
}