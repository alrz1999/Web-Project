const createNewDoctor = require('../../../entities/doctor')
module.exports = function makeEditDoctor({  doctorsDb }) {
    return async function editDoctor(id, ...changes) {
        const result = await doctorsDb.update({id, changes});
    }
}