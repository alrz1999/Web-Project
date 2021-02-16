const createNewCustomer = require('../../../entities/customer')
module.exports = function makeEditCustomer({ customerDb }) {
    return async function editCustomer(id, ...changes) {
        const customer = createNewCustomer(customerInfo);
        const exists = await customerDb.find();
    }
}