const createNewDoctor = require('../../../entities/doctor')
module.exports = function makeGetDoctor({ doctorsDb }) {
    return async function getDoctor(id) {
        const result = await doctorsDb.find(id);
        return result;
    }
}