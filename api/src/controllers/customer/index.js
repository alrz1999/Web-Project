const { removeCustomer, addCustomer, editCustomer, listCustomers } = require('../../application/use-cases/customer');
const customerSubControllersFactory = require('./customer-services');


const deleteCustomer = customerSubControllersFactory.makeDeleteCustomer({ removeCustomer });
const getCustomer = customerSubControllersFactory.makeGetCustomers({ listCustomers });
const postAddCustomer = customerSubControllersFactory.makeAddCustomer({ addCustomer });
const postEditCustomer = customerSubControllersFactory.makeEditCustomer({ editCustomer });

const customerControllers = {
    deleteCustomer,
    getCustomer,
    postAddCustomer,
    postEditCustomer
};

module.exports = { customerControllers, deleteCustomer, getCustomer, postAddCustomer, postEditCustomer };



