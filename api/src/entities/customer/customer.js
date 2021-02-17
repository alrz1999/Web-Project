module.exports = class Customer {
    constructor(firstName, lastName, email, phoneNumber, password, id = null) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.id = id;
    }
}