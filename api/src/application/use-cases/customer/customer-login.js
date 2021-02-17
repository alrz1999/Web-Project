const createNewCustomer = require('../../../entities/customer')
module.exports = function makeCustomerLogin({ customersDb, authService }) {
    return async function customerLogin({ ...loginInfo }) {
        const { phoneNumber, role, password } = loginInfo;
        if (role && role != 'customer') {
            throw new Error('access denied.');
        };

        const customer = await customersDb.login(phoneNumber, password);
        const token = authService.generateToKen(customer.username, customer.role);

        return token;
    }
}