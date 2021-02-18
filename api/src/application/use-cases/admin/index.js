const makeAddAdmin = require('./create-admin');
const makeDeleteAdmin = require('./delete-admin');
const makeEditAdmin = require('./edit-admin');
const makeListAdmins = require('./list-admins');
const makeGetAdmin = require('./get-admin');
const makeAdminLogin = require('./admin-login');


const adminsDb = require('../../../data-access/admin');
const { authService } = require('../../security')

const addAdmin = makeAddAdmin({ adminsDb });
const editAdmin = makeEditAdmin({ adminsDb });
const listAdmins = makeListAdmins({ adminsDb });
const removeAdmin = makeDeleteAdmin({ adminsDb });
const getAdminById = makeGetAdmin({ adminsDb });
const adminLogin = makeAdminLogin({ adminsDb, authService });

const adminService = Object.freeze({
    addAdmin,
    editAdmin,
    listAdmins,
    removeAdmin,
    getAdminById,
    adminLogin
});

module.exports = { adminService, addAdmin, editAdmin, listAdmins, removeAdmin, getAdminById, adminLogin };