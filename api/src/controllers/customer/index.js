const { removeCustomer, addCustomer, editCustomer, listCustomers, getCustomerById, customerLogin, fillFreeAppointment } = require('../../application/use-cases/customer');
const customerSubControllersFactory = require('./customer-services');
customerSubControllersFactory.makeAddCustomer

const deleteCustomer = customerSubControllersFactory.makeDeleteCustomer({ removeCustomer });
const getCustomers = customerSubControllersFactory.makeGetCustomers({ listCustomers });
const postAddCustomer = customerSubControllersFactory.makeAddCustomer({ addCustomer, customerLogin });
const postEditCustomer = customerSubControllersFactory.makeEditCustomer({ editCustomer });
const getCustomer = customerSubControllersFactory.makeGetCustomer({ getCustomerById });
const loginCustomer = customerSubControllersFactory.makeLoginCustomer({ customerLogin });
const fillAppointment = customerSubControllersFactory.makeFillAppointment({ fillFreeAppointment });


const customerControllers = {
    deleteCustomer,
    getCustomers,
    postAddCustomer,
    postEditCustomer,
    getCustomer,
    loginCustomer,
    fillAppointment
};

module.exports = {
    customerControllers, deleteCustomer, getCustomers, postAddCustomer, postEditCustomer, getCustomer,
    loginCustomer, fillAppointment
};



