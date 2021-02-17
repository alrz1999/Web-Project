const Parse = require('parse/node');
const Customer = require('../../../../entities/customer/customer');
const CustomerUser = require('./customer-dto')

module.exports = function makeCustomersDb() {
    return Object.freeze({
        findAll,
        findById,
        findByEmail,
        findByPhoneNumber,
        insert,
        remove,
        update
    });

    async function findAll() {
        const query = new Parse.Query(CustomerUser);
        // query.equalTo("playerName", "Dan Stemkoski");
        query.equalTo("role", "customer");
        const resultDTO = await query.find();
        const customers = resultDTO.map(convertToCustomerEntity);
        return customers;
    };

    async function findById(id) {
        const query = new Parse.Query(CustomerUser);
        query.equalTo("role", "customer");
        query.equalTo("id", id);
        const result = await query.find();
        if (result.length === 0) {
            return null;
        };
        return convertToCustomerEntity(result[0]);
    };

    async function findByEmail(email) {
        const query = new Parse.Query(CustomerUser);
        query.equalTo("role", "customer");
        query.equalTo("email", email);
        const result = await query.find();
        if (result.length === 0) {
            return null;
        };
        return convertToCustomerEntity(result[0]);
    };

    async function findByPhoneNumber(phoneNumber) {
        const query = new Parse.Query(CustomerUser);
        query.equalTo("role", "customer");
        query.equalTo("phoneNumber", phoneNumber);
        const result = await query.find();
        if (result.length === 0) {
            return null;
        };
        return convertToCustomerEntity(result[0]);
    };

    async function insert(customer) {
        const user = new CustomerUser();
        username = customer.username ? customer.username : customer.email;

        user.set("username", username);
        user.set("password", customer.password);
        user.set("email", customer.email);
        user.set("role", "customer");
        user.set("firstName", customer.firstName);
        user.set("lastName", customer.lastName);
        user.set("phoneNumber", customer.phoneNumber);

        try {
            await user.signUp();
            return user;
        } catch (error) {
            console.log("Error: " + error.code + " " + error.message);
            throw error;
        }
    };

    async function update({ id, ...newCustomerInfo }) {
        const query = new Parse.Query(CustomerUser);
        query.equalTo("role", "customer");
        query.equalTo("id", id);
        const result = await query.first();
        //TODO what can be edited
        if (newCustomerInfo.password)
            result.setPassword(password);

        return result;
    };

    async function remove() {
        const query = new Parse.Query(CustomerUser);
        query.equalTo("role", "customer");
        query.equalTo("id", id);
        const result = await query.first();
        result.destroy().then((myObject) => {
            return true;
        }, (error) => {
            throw new Error(error);
        });
    };

    async function exists({ username, email, phoneNumber }) {
        let exists = false;
        if (username) {
            const query = new Parse.Query(CustomerUser);
            query.equalTo("role", "customer");
            query.equalTo('username', username);
            let result = await query.first();
            exists = result ? true : exists;
        }

        if (email) {
            const query = new Parse.Query(CustomerUser);
            query.equalTo("role", "customer");
            query.equalTo('email', email);
            let result = await query.first();
            exists = result ? true : exists;
        }

        if (phoneNumber) {
            const query = new Parse.Query(CustomerUser);
            query.equalTo("role", "customer");
            query.equalTo('phoneNumber', phoneNumber);
            let result = await query.first();
            exists = result ? true : exists;
        }

        return exists;
    };


    function convertToCustomerEntity(customerDTO) {
        return new Customer(
            customerDTO.get('firstName'),
            customerDTO.get('lastName'),
            customerDTO.get('username'),
            customerDTO.email,
            customerDTO.get('phoneNumber'),
            customerDTO.get("password"),
            customerDTO.id,
        );
    };
}   