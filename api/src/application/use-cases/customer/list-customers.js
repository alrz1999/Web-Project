const createNewCustomer = require('../../../entities/customer')
module.exports = function makeListCustomers({ customersDb }) {
    return async function listCustomers() {
        let result = await customersDb.findAll();
        console.log(result);
        return result;
    }
}