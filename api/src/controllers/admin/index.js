const { removeAdmin, addAdmin, editAdmin, listAdmins, getAdmin, adminLogin } = require('../../application/use-cases/admin');
const adminSubControllersFactory = require('./admin-services');


const deleteAdmin = adminSubControllersFactory.makeDeleteAdmin({ removeAdmin });
const getAdmins = adminSubControllersFactory.makeGetAdmins({ listAdmins });
const postAddAdmin = adminSubControllersFactory.makeAddAdmin({ addAdmin });
const postEditAdmin = adminSubControllersFactory.makeEditAdmin({ editAdmin });
const getAdmin = adminSubControllersFactory.makeGetAdmin({ getAdmin });
const loginAdmin = adminSubControllersFactory.makeloginAdmin({ adminLogin });

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



