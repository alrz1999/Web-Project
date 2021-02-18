module.exports = class Appointment {
    constructor(day, time, doctorId, id = null, customerId = null) {
        this.day = day;
        this.time = time;
        this.doctorId = doctorId;
        this.customerId = customerId;
        this.id = id;
    }
}