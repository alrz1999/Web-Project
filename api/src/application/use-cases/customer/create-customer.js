const createNewCustomer = require('../../../entities/customer')
module.exports = function makeCreateCustomer({ customersDb }) {
    return async function createCustomer(customerInfo) {
        const customer = createNewCustomer(customerInfo);
        const result = await customersDb.insert(customer);
        return result;
    }
}