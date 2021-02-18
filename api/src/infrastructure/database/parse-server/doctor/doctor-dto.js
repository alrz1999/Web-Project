
const Parse = require('parse/node')

class DoctorUser extends Parse.User {
    constructor(attributes) {
        super(attributes);
    }
}
Parse.Object.registerSubclass('_User', DoctorUser);

module.exports = DoctorUser