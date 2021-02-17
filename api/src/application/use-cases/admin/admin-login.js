const createNewAdmin = require('../../../entities/admin')
module.exports = function makeAdminLogin({ adminsDb, authService }) {
    return async function adminLogin({ ...loginInfo }) {
        const { username, role, password } = loginInfo;
        if (role && role != 'admin') {
            throw new Error('access denied.');
        };

        const admin = await adminsDb.login(username, password);
        const token = authService.generateToKen(admin.username, admin.role);

        return token;
    }
}