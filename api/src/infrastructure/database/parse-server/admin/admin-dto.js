
const Parse = require('parse/node')

class AdminUser extends Parse.User {
    constructor(attributes) {
        super(attributes);
    }
}
Parse.Object.registerSubclass('_User', AdminUser);

module.exports = AdminUser