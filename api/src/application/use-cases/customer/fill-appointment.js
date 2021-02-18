const createNewCustomer = require('../../../entities/customer')
module.exports = function makeFillAppointment({ customersDb }) {
    return async function fillAppointment({ id, role, appointmentId }) {
        if (!appointmentId) {
            throw new Error('appointment id can not be empty.');
        }
        const appoitment = await customersDb.fillAppointment({ id, appointmentId });
        return appoitment;
    }
}