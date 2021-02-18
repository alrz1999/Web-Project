const createNewCustomer = require('../../../entities/customer')
module.exports = function makeListCustomers({ customersDb }) {
    return async function listCustomers() {
        const result = await customersDb.findAll();
        return result;
    }
}