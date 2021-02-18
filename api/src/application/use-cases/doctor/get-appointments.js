const createNewDoctor = require('../../../entities/doctor')
module.exports = function makeGetAppointments({ doctorsDb }) {
    return async function getAppoitments({ doctorId, day, time }) {
        if (!doctorId) {
            throw new Error('No doctor with specified doctor id exists.')
        }
        const appoitments = await doctorsDb.getAppoitments({ doctorId, day, time });
        return appoitments;
    }
}