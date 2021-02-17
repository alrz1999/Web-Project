const createNewCustomer = require('../../../entities/customer')
module.exports = function makeDeleteCustomer({ customerDb }) {
    return async function deleteCustomer(id) {
        const result = await customerDb.remove(id);
        return result;
    }
}