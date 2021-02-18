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
        update,
        login,
        logout,
        exists,
        getAppoitments
    });

    async function findAll() {
        const query = new Parse.Query(DoctorUser);
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
        let username = doctor.medicalNumber + '';
        
        user.set("password", doctor.password);
        user.set("username", username)
        user.set("email", doctor.email);
        user.set("role", "doctor");
        user.set("firstName", doctor.firstName);
        user.set("lastName", doctor.lastName);
        user.set("description", doctor.description);
        user.set("medicalNumber", doctor.medicalNumber);
        user.set("image", doctor.image);

        try {
            await user.signUp();
            return convertToDoctorEntity(user);
        } catch (error) {
            console.log("Error: " + error.code + " " + error.message);
            throw error;
        }
    };

    async function update({ id, ...newDoctorInfo }) {
        const query = new Parse.Query(DoctorUser);
        query.equalTo("role", "doctor");
        query.equalTo("id", id);
        const doctor = await query.first();
        //TODO what can be edited
        if (newDoctorInfo.password)
            doctor.setPassword(password);

        return convertToDoctorEntity(doctor);
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

    async function exists({ email, phoneNumber, medicalNumber }) {
        let exists = false;
        if (medicalNumber) {
            const query = new Parse.Query(DoctorUser);
            query.equalTo("role", "doctor");
            query.equalTo('medicalNumber', medicalNumber);
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

    async function login({ ...loginInfo }) {
        const { medicalNumber, password } = loginInfo;
        const user = await Parse.User.logIn(toString(medicalNumber), password);
        if (user.get('role') != 'doctor') {
            await user.logout();
            throw new Error("access denied.")
        }
        return convertToDoctorEntity(user);
    };

    async function logout({ ...logoutInfo }) {
        const user = await Parse.User.logOut()
        return user;
    };

    async function getAppoitments() {
        const query = new Parse.Query(DoctorUser);
        query.equalTo("role", "doctor");
        const resultDTO = await query.find();
        const doctors = resultDTO.map(convertToDoctorEntity);
        return doctors;
    };


    function convertToDoctorEntity(doctorDTO) {
        return new Doctor(
            doctorDTO.get('firstName'),
            doctorDTO.get('lastName'),
            doctorDTO.email,
            doctorDTO.get('phoneNumber'),
            doctorDTO.get("password"),
            doctorDTO.get('medicalNumber'),
            doctorDTO.id,
            doctorDTO.get('description'),
            doctorDTO.get('image')
        );
    };
}   