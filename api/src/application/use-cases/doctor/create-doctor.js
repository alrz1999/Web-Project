const createNewDoctor = require('../../../entities/doctor')
module.exports = function makeCreateDoctor({ doctorsDb }) {
    return async function createDoctor(doctorInfo) {
        const doctor = createNewDoctor(doctorInfo);
        const result = await doctorsDb.insert(doctor);
        return result;
    }
}