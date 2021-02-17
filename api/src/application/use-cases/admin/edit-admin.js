const createNewAdmin = require('../../../entities/admin')
module.exports = function makeEditAdmin({ adminsDb }) {
    return async function editAdmin(id, ...changes) {
        const result = await adminsDb.update({id, changes});
        return result;
    }
}