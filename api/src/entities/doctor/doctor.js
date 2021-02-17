module.exports = class Doctor {
    constructor(firstName, lastName, email, phoneNumber, password, medicalNumber, id = null, description = null, image = null) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.id = id;
        this.medicalNumber = medicalNumber;
        this.description = description;
        this.image = image;
    }
}