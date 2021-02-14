let Parse = require('parse/node')

class CustomUser extends Parse.User {
  constructor(attributes) {
    super(attributes);
  }

  doSomething() {
    return 5;
  }
}
Parse.Object.registerSubclass('_User', CustomUser);

module.exports = CustomUser