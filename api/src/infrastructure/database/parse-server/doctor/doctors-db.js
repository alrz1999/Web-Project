const Parse = require('parse/node');
const Doctor = require('../../../../entities/doctor/doctor');
const DoctorUser = require('./doctor-dto')

module.exports = function makeDoctorsDb() {
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
        const query = new Parse.Query(DoctorUser);
        // query.equalTo("playerName", "Dan Stemkoski");
        query.equalTo("role", "doctor");
        const resultDTO = await query.find();
        const doctors = resultDTO.map(convertToDoctorEntity);
        return doctors;
    };

    async function findById(id) {
        const query = new Parse.Query(DoctorUser);
        query.equalTo("role", "doctor");
        query.equalTo("id", id);
        const result = await query.find();
        if (result.length === 0) {
            return null;
        };
        return convertToDoctorEntity(result[0]);
    };

    async function findByEmail(email) {
        const query = new Parse.Query(DoctorUser);
        query.equalTo("role", "doctor");
        query.equalTo("email", email);
        const result = await query.find();
        if (result.length === 0) {
            return null;
        };
        return convertToDoctorEntity(result[0]);
    };

    async function findByPhoneNumber(phoneNumber) {
        const query = new Parse.Query(DoctorUser);
        query.equalTo("role", "doctor");
        query.equalTo("phoneNumber", phoneNumber);
        const result = await query.find();
        if (result.length === 0) {
            return null;
        };
        return convertToDoctorEntity(result[0]);
    };

    async function insert(doctor) {
        const user = new DoctorUser();
        username = doctor.username ? doctor.username : doctor.email;

        user.set("username", username);
        user.set("password", doctor.password);
        user.set("email", doctor.email);
        user.set("role", "doctor");
        user.set("firstName", doctor.firstName);
        user.set("lastName", doctor.lastName);
        user.set("phoneNumber", doctor.phoneNumber);

        try {
            await user.signUp();
            return user;
        } catch (error) {
            console.log("Error: " + error.code + " " + error.message);
            throw error;
        }
    };

    async function update({ id, ...newDoctorInfo }) {
        const query = new Parse.Query(DoctorUser);
        query.equalTo("role", "doctor");
        query.equalTo("id", id);
        const result = await query.first();
        //TODO what can be edited
        if (newDoctorInfo.password)
            result.setPassword(password);

        return result;
    };

    async function remove() {
        const query = new Parse.Query(DoctorUser);
        query.equalTo("role", "doctor");
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
            const query = new Parse.Query(DoctorUser);
            query.equalTo("role", "doctor");
            query.equalTo('username', username);
            let result = await query.first();
            exists = result ? true : exists;
        }

        if (email) {
            const query = new Parse.Query(DoctorUser);
            query.equalTo("role", "doctor");
            query.equalTo('email', email);
            let result = await query.first();
            exists = result ? true : exists;
        }

        if (phoneNumber) {
            const query = new Parse.Query(DoctorUser);
            query.equalTo("role", "doctor");
            query.equalTo('phoneNumber', phoneNumber);
            let result = await query.first();
            exists = result ? true : exists;
        }

        return exists;
    };


    function convertToDoctorEntity(doctorDTO) {
        return new Doctor(
            doctorDTO.get('firstName'),
            doctorDTO.get('lastName'),
            doctorDTO.get('username'),
            doctorDTO.email,
            doctorDTO.get('phoneNumber'),
            doctorDTO.get("password"),
            doctorDTO.id,
        );
    };
}   