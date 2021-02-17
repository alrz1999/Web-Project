const createNewCustomer = require('../../../entities/customer')
module.exports = function makeCustomerLogin({ customersDb, authService }) {
    return async function customerLogin({ ...loginInfo }) {
        const { phoneNumber, role, password, email } = loginInfo;
        if (role && role != 'customer') {
            throw new Error('access denied.');
        };
        console.log(email)
        const customer = await customersDb.login({email, password});
        console.log(customer);
        const token = authService.generateToken(customer.username, customer.role);

        return token;
    }
}