const createNewDoctor = require('../../../entities/doctor')
module.exports = function makeDoctorLogin({ doctorsDb, authService }) {
    return async function doctorLogin({ ...loginInfo }) {
        const { email, role, password } = loginInfo;
        if (role && role != 'doctor') {
            throw new Error('access denied.');
        };

        const doctor = await doctorsDb.login(email, password);
        const token = authService.generateToKen(doctor.username, doctor.role);

        return token;
    }
}