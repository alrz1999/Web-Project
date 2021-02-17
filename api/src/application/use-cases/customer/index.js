const makeAddCustomer = require('./create-customer');
const makeDeleteCustomer = require('./delete-customer');
const makeEditCustomer = require('./edit-customer');
const makeListCustomers = require('./list-customers');
const makeGetCustomer = require('./get-customer');
const makeCustomerLogin = require('./customer-login');


const customersDb = require('../../../data-access/customer');
const { authService } = require('../../security')

const addCustomer = makeAddCustomer({ customersDb });
const editCustomer = makeEditCustomer({ customersDb });
const listCustomers = makeListCustomers({ customersDb });
const removeCustomer = makeDeleteCustomer({ customersDb });
const getCustomer = makeGetCustomer({ customersDb });
const customerLogin = makeCustomerLogin({ customersDb, authService });

const customerService = Object.freeze({
    addCustomer,
    editCustomer,
    listCustomers,
    removeCustomer,
    getCustomer,
    customerLogin
});

module.exports = { customerService, addCustomer, editCustomer, listCustomers, removeCustomer, getCustomer, customerLogin };