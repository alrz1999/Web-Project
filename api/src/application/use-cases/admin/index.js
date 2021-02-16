const makeAddAdmin = require('./create-admin');
const makeDeleteAdmin = require('./delete-admin');
const makeEditAdmin = require('./edit-admin');
const makeListAdmins = require('./list-admins');

const addAdmin = makeAddAdmin({ adminsDb });
const editAdmin = makeEditAdmin({ adminsDb });
const listAdmins = makeListAdmins({ adminsDb });
const removeAdmin = makeDeleteAdmin({ adminsDb });

const adminService = Object.freeze({
    addAdmin,
    editAdmin,
    listAdmins,
    removeAdmin
});

module.exports = { adminService, addAdmin, editAdmin, listAdmins, removeAdmin };