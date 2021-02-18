const createNewCustomer = require('../../../entities/customer')
module.exports = function makeEditCustomer({ customersDb }) {
    return async function editCustomer(id, ...changes) {
        const result = await customersDb.update({ id, changes });
        return result;
    }
}