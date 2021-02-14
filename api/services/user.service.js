let Parse = require('parse/node');
let CustomeUser = require('../models/CustomUser')

const createUser = async (body, attributes, role) => {
    const user = new CustomeUser(attributes);
    user.set("username", body.username);
    user.set("password", body.password);
    user.set("email", body.email);
    user.set("role", role)

    try {
        await user.signUp();
        return user;
    } catch (error) {
        console.log("Error: " + error.code + " " + error.message);
        throw error;
    }
}
const deleteUser = async () => {

}

const getUser = async (username) => {
    const query = new Parse.Query(CustomeUser);
    query.equalTo("username", username);
    const user = await query.first();
    return user;
}

const getUserByEmail = async (email) => {
    const query = new Parse.Query(CustomeUser);
    query.equalTo("email", email);
    const user = await query.first();
    return user;
}

const doesExists = async (column, value) => {
    const query = new Parse.Query(CustomeUser);
    query.equalTo(column, value);
    const user = await query.first()
    return user ? true : false;
}

const getUsers = async () => {

}

const updateUser = async () => {

}

module.exports = { createUser, deleteUser, getUser, updateUser, getUsers, doesExists } 