const Parse = require('parse/node');
const Customer = require('../../../../entities/customer/customer');
const CustomerUser = require('./customer-dto');
const AppointmentDTO = require('../doctor/appoitment-dto');
const Appointment = require('../../../../entities/doctor/appointment');


module.exports = function makeCustomersDb() {
    return Object.freeze({
        findAll,
        findById,
        findByEmail,
        findByPhoneNumber,
        insert,
        remove,
        update,
        login,
        logout,
        exists,
        fillAppointment
    });

    async function findAll() {
        const query = new Parse.Query(CustomerUser);
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

        user.set("username", customer.email);
        user.set("password", customer.password);
        user.set("email", customer.email);
        user.set("role", "customer");
        user.set("firstName", customer.firstName);
        user.set("lastName", customer.lastName);
        user.set("phoneNumber", customer.phoneNumber);

        try {
            await user.signUp();
            return convertToCustomerEntity(user);
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

        return convertToCustomerEntity(result);
    };

    async function remove(id) {
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

    async function exists({ email, phoneNumber }) {
        let exists = false;

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

    async function login({ ...loginInfo }) {
        const { email, password } = loginInfo;
        const user = await Parse.User.logIn(email, password);
        if (user.get('role') != 'customer') {
            await user.logout();
            throw new Error("access denied.")
        }
        return convertToCustomerEntity(user);
    };

    async function logout({ ...logoutInfo }) {
        const user = await Parse.User.logOut()
        return user;
    };

    async function fillAppointment({ id, appointmentId }) {
        const query = new Parse.Query(AppointmentDTO);
        query.equalTo('objectId', appointmentId);
        const resultDTO = await query.first();
        if (resultDTO.get('customerId') == null) {
            resultDTO.set('customerId', id);
        } else {
            throw new Error('this appointment is got by someone else.')
        }
        const newResult = await resultDTO.save();
        const appointment = convertToAppointmentEntity(newResult)
        return appointment;
    };

    function convertToCustomerEntity(customerDTO) {
        return new Customer(
            customerDTO.get('firstName'),
            customerDTO.get('lastName'),
            customerDTO.get('username'),
            customerDTO.get('phoneNumber'),
            customerDTO.get("password"),
            customerDTO.id,
        );
    };

    function convertToAppointmentEntity(appoitmentDTO) {
        return new Appointment(
            appoitmentDTO.get('day'),
            appoitmentDTO.get('time'),
            appoitmentDTO.get('doctorId'),
            appoitmentDTO.id,
            appoitmentDTO.get('customerId'),
        );
    };
}   