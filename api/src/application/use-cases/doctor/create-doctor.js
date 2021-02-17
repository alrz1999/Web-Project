const createNewDoctor = require('../../../entities/doctor')
module.exports = function makeCreateDoctor({ customerDb: doctorDb }) {
    return async function createDoctor(doctorInfo) {
        const doctor = createNewDoctor(doctorInfo);
        const result = await doctorDb.insert(doctor);
        return result;
    }
}