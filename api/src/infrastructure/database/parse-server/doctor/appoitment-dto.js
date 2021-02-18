
const Parse = require('parse/node')

class Appointment extends Parse.Object {
    constructor(attributes) {
        super('Appointment');
    }
}

Parse.Object.registerSubclass('Appointment', Appointment);

module.exports = Appointment