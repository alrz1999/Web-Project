const { removeCustomer, addCustomer, editCustomer, listCustomers, getCustomer, customerLogin } = require('../../application/use-cases/customer');
const customerSubControllersFactory = require('./customer-services');
customerSubControllersFactory.makeAddCustomer

const deleteCustomer = customerSubControllersFactory.makeDeleteCustomer({ removeCustomer });
const getCustomers = customerSubControllersFactory.makeGetCustomers({ listCustomers });
const postAddCustomer = customerSubControllersFactory.makeAddCustomer({ addCustomer });
const postEditCustomer = customerSubControllersFactory.makeEditCustomer({ editCustomer });
const getCustomer = customerSubControllersFactory.makeGetCustomer({ getCustomer });
const loginCustomer = customerSubControllersFactory.makeloginCustomer({ customerLogin });


const customerControllers = {
    deleteCustomer,
    getCustomers,
    postAddCustomer,
    postEditCustomer,
    getCustomer,
    loginCustomer,
};

module.exports = {
    customerControllers, deleteCustomer, getCustomers, postAddCustomer, postEditCustomer, getCustomer,
    loginCustomer,
};



