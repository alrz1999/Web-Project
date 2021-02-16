const { removeCustomer, addCustomer, editCustomer, listCustomers } = require('../../application/use-cases/customer');
const customerSubControllersFactory = require('./customer-services');
customerSubControllersFactory.makeAddCustomer

const deleteCustomer = customerSubControllersFactory.makeDeleteCustomer({ removeCustomer });
const getCustomers = customerSubControllersFactory.makeGetCustomers({ listCustomers });
const postAddCustomer = customerSubControllersFactory.makeAddCustomer({ addCustomer });
const postEditCustomer = customerSubControllersFactory.makeEditCustomer({ editCustomer });

const customerControllers = {
    deleteCustomer,
    getCustomers,
    postAddCustomer,
    postEditCustomer
};

module.exports = { customerControllers, deleteCustomer, getCustomers, postAddCustomer, postEditCustomer };



