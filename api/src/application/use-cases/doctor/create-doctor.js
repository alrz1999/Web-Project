const createNewDoctor = require('../../../entities/doctor')
module.exports = function makeCreateDoctor({ customerDb: doctorDb }) {
    return async function createNewDoctor(doctorInfo) {
        const doctor = createNewDoctor(doctorInfo);
        const exists = await doctorDb.find();
    }
}