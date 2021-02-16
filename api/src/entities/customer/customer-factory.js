const Customer = require("./customer")

module.exports = function customerFactory({ db, sanitize }) {
    return function createCustomer({ firstName, lastName, email, phoneNumber, password, id } = {}) {
        if (!firstName) {
            throw new Error('FirstName can not be empty.')
        }
        if (!lastName) {
            throw new Error('LastName can not be empty.')
        }
        if (!email) {
            throw new Error('Email can not be empty.')
        }
        if (!phoneNumber) {
            throw new Error('PhoneNumber can not be empty.')
        }
        if (password.length < 4) {
            throw new Error("Password must be longer than 4 characters.")
        }

        return Customer({
            getFirstName: () => firstName,
            getLastName: () => lastName,
            getEmail: () => email,
            getId: () => id,
        })
    }
}