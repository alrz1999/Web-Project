const createNewCustomer = require('../../../entities/customer')
module.exports = function makeGetCustomer({ customersDb }) {
    return async function getCustomer(id) {
        const result = await customersDb.find(id);
        return result;
    }
}