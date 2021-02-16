const makeAddCustomer = require('./create-customer');
const makeDeleteCustomer = require('./delete-customer');
const makeEditCustomer = require('./edit-customer');
const makeListCustomers = require('./list-customers');

const addCustomer = makeAddCustomer({ customersDb });
const editCustomer = makeEditCustomer({ customersDb });
const listCustomers = makeListCustomers({ customersDb });
const removeCustomer = makeDeleteCustomer({ customersDb });

const customerService = Object.freeze({
    addCustomer,
    editCustomer,
    listCustomers,
    removeCustomer
});

module.exports = { customerService, addCustomer, editCustomer, listCustomers, removeCustomer };