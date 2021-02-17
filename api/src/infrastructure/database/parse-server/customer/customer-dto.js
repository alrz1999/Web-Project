
const Parse = require('parse/node')

class CustomerUser extends Parse.User {
    constructor(attributes) {
        super(attributes);
    }

    doSomething() {
        return 5;
    }
}
Parse.Object.registerSubclass('_User', CustomerUser);

module.exports = CustomerUser