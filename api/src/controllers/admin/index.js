const { removeAdmin, addAdmin, editAdmin, listAdmins } = require('../../application/use-cases/admin');
const adminSubControllersFactory = require('./admin-services');


const deleteAdmin = adminSubControllersFactory.makeDeleteAdmin({ removeAdmin });
const getAdmins = adminSubControllersFactory.makeGetAdmins({ listAdmins });
const postAddAdmin = adminSubControllersFactory.makeAddAdmin({ addAdmin });
const postEditAdmin = adminSubControllersFactory.makeEditAdmin({ editAdmin });

const adminControllers = {
    deleteAdmin,
    getAdmins,
    postAddAdmin,
    postEditAdmin
};

module.exports = { adminControllers, deleteAdmin, getAdmins, postAddAdmin, postEditAdmin };



