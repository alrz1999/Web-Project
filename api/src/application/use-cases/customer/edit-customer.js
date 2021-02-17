const createNewCustomer = require('../../../entities/customer')
module.exports = function makeEditCustomer({ customerDb }) {
    return async function editCustomer(id, ...changes) {
        const result = await customerDb.update({ id, changes });
        return result;
    }
}