module.exports = class Admin {
    constructor(firstName, lastName, username = null, email, phoneNumber, password, id = null) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.username = username;
        this.id = id;
    }
}