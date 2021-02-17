const createNewDoctor = require('../../../entities/doctor')
module.exports = function makeDoctorLogin({ doctorsDb, authService }) {
    return async function doctorLogin({ ...loginInfo }) {
        const { medicalNumber, role, password } = loginInfo;
        if (role && role != 'doctor') {
            throw new Error('access denied.');
        };
        const doctor = await doctorsDb.login({medicalNumber, password});
        const { id } = doctor;
        const token = authService.generateToken({ id, role });

        return token;
    }
}