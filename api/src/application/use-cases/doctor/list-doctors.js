const createNewDoctor = require('../../../entities/doctor')
module.exports = function makeListDoctors({ customerDb: doctorDb }) {
    return async function listDoctors() {
        const doctor = createNewDoctor(doctorInfo);
        const exists = await doctorDb.find();
    }
}