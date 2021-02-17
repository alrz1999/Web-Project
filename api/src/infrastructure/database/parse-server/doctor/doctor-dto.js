
const Parse = require('parse/node')

class DoctorUser extends Parse.User {
    constructor(attributes) {
        super(attributes);
    }

    doSomething() {
        return 5;
    }
}
Parse.Object.registerSubclass('_User', DoctorUser);

module.exports = DoctorUser