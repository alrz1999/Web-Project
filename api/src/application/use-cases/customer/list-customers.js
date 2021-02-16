const createNewCustomer = require('../../../entities/customer')
module.exports = function makeListCustomers({ customerDb }) {
    return async function listCustomers() {
        const customer = createNewCustomer(customerInfo);
        const exists = await customerDb.find();
    }
}