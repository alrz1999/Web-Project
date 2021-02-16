const createNewCustomer = require('../../../entities/customer')
module.exports = function makeDeleteCustomer({ customerDb }) {
    return async function deleteCustomer({ id }) {
        const customer = createNewCustomer(customerInfo);
        const exists = await customerDb.find();
    }
}