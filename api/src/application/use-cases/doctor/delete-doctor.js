const createNewDoctor = require('../../../entities/doctor')
module.exports = function makeDeleteDoctor({ customerDb: doctorDb }) {
    return async function deleteDoctor({ id }) {
        const doctor = createNewDoctor(doctorInfo);
        const exists = await doctorDb.find();
    }
}