const Customer = require("./customer")

module.exports = function customerFactory(customersDb) {
    return function createCustomer({ firstName, lastName, email, phoneNumber, password }) {
        //TODO check phoneNumber to be unique
        if (!firstName) {
            throw new Error('FirstName can not be empty.')
        }
        if (!lastName) {
            throw new Error('LastName can not be empty.')
        }
        if (!email) {
            throw new Error('Email can not be empty.')
        }
        if (!validateEmail(email)) {
            throw new Error('Email is not valid.')
        }
        if (!phoneNumber) {
            throw new Error('Phone number can not be empty.')
        }
        if (isNaN(phoneNumber)) {
            throw new Error('Phone number must only contains numbers.')
        }
        if (phoneNumber.length != 10) {
            throw new Error('Phone number must be 10 characters.')
        }
        if (password.length < 4) {
            throw new Error("Password must be longer than 4 characters.")
        }

        return new Customer(firstName, lastName, email, phoneNumber, password);
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}