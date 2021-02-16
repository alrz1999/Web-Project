const createNewDoctor = require('../../../entities/doctor')
module.exports = function makeEditDoctor({ customerDb: doctorDb }) {
    return async function editDoctor(id, ...changes) {
        const doctor = createNewDoctor(doctorInfo);
        const exists = await doctorDb.find();
    }
}