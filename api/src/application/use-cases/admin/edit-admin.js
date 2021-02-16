const createNewAdmin = require('../../../entities/admin')
module.exports = function makeEditAdmin({ adminsDb }) {
    return async function editAdmin(id, ...changes) {
        const admin = createNewAdmin();
        const exists = await adminsDb.find();
    }
}