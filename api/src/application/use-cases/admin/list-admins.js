const createNewAdmin = require('../../../entities/admin')
module.exports = function makeListAdmins({ adminsDb }) {
    return async function listAdmins() {
        const admin = createNewAdmin(adminInfo);
        const exists = await adminsDb.find();
    }
}