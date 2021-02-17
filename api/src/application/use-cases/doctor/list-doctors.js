const createNewDoctor = require('../../../entities/doctor')
module.exports = function makeListDoctors({ doctorsDb }) {
    return async function listDoctors() {
        const result = await doctorsDb.findAll();
        return result;
    }
}