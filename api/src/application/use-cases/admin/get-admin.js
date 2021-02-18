const createNewAdmin = require('../../../entities/admin')
module.exports = function makeGetAdmin({ adminsDb }) {
    return async function getAdmin(id) {
        const result = await adminsDb.find(id);
        return result;
    }
}