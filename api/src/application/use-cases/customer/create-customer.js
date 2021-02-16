const createNewCustomer = require('../../../entities/customer')
module.exports = function makeCreateCustomer({ customerDb }) {
    return async function createNewCustomer(customerInfo) {
        const customer = createNewCustomer(customerInfo);
        const exists = await customerDb.find();
    }
}