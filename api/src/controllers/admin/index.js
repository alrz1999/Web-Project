const { removeAdmin, addAdmin, editAdmin, listAdmins, getAdminById, adminLogin } = require('../../application/use-cases/admin');
const adminSubControllersFactory = require('./admin-services');


const deleteAdmin = adminSubControllersFactory.makeDeleteAdmin({ removeAdmin });
const getAdmins = adminSubControllersFactory.makeGetAdmins({ listAdmins });
const postAddAdmin = adminSubControllersFactory.makeAddAdmin({ addAdmin });
const postEditAdmin = adminSubControllersFactory.makeEditAdmin({ editAdmin });
const getAdmin = adminSubControllersFactory.makeGetAdmin({ getAdminById });
const loginAdmin = adminSubControllersFactory.makeLoginAdmin({ adminLogin });

const adminControllers = {
    deleteAdmin,
    getAdmins,
    postAddAdmin,
    postEditAdmin,
    getAdmin,
    loginAdmin,
};

module.exports = {
    adminControllers, deleteAdmin, getAdmins, postAddAdmin, postEditAdmin, getAdmin,
    loginAdmin,
};



