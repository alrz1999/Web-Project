const createNewCustomer = require('../../../entities/customer')
module.exports = function makeCustomerLogin({ customersDb, authService }) {
    return async function customerLogin({ ...loginInfo }) {
        const { role, password, email } = loginInfo;
        if (role && role != 'customer') {
            throw new Error('access denied.');
        };
        const customer = await customersDb.login({email, password});
        const token = authService.generateToken(customer.username, customer.role);

        return token;
    }
}