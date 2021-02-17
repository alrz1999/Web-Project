const createNewDoctor = require('../../../entities/doctor')
module.exports = function makeDeleteDoctor({ doctorsDb }) {
    return async function deleteDoctor(id) {
        const doctor = createNewDoctor(doctorInfo);
        const result = await doctorsDb.renove(id);
        return result;
    }
}