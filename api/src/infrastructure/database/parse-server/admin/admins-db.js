const Parse = require('parse/node');
const Admin = require('../../../../entities/admin/admin');
const AdminUser = require('./admin-dto')

module.exports = function makeAdminsDb() {
    return Object.freeze({
        findAll,
        findById,
        findByEmail,
        findByPhoneNumber,
        insert,
        remove,
        update,
        login,
        logout
    });

    async function findAll() {
        const query = new Parse.Query(AdminUser);
        // query.equalTo("playerName", "Dan Stemkoski");
        query.equalTo("role", "admin");
        const resultDTO = await query.find();
        const admins = resultDTO.map(convertToAdminEntity);
        return admins;
    };

    async function findById(id) {
        const query = new Parse.Query(AdminUser);
        query.equalTo("role", "admin");
        query.equalTo("id", id);
        const result = await query.find();
        if (result.length === 0) {
            return null;
        };
        return convertToAdminEntity(result[0]);
    };

    async function findByEmail(email) {
        const query = new Parse.Query(AdminUser);
        query.equalTo("role", "admin");
        query.equalTo("email", email);
        const result = await query.find();
        if (result.length === 0) {
            return null;
        };
        return convertToAdminEntity(result[0]);
    };

    async function findByPhoneNumber(phoneNumber) {
        const query = new Parse.Query(AdminUser);
        query.equalTo("role", "admin");
        query.equalTo("phoneNumber", phoneNumber);
        const result = await query.find();
        if (result.length === 0) {
            return null;
        };
        return convertToAdminEntity(result[0]);
    };

    async function insert(admin) {
        const user = new AdminUser();
        username = admin.username ? admin.username : admin.email;

        user.set("username", username);
        user.set("password", admin.password);
        user.set("email", admin.email);
        user.set("role", "admin");
        user.set("firstName", admin.firstName);
        user.set("lastName", admin.lastName);
        user.set("phoneNumber", admin.phoneNumber);

        try {
            await user.signUp();
            return user;
        } catch (error) {
            console.log("Error: " + error.code + " " + error.message);
            throw error;
        }
    };

    async function update({ id, ...newAdminInfo }) {
        const query = new Parse.Query(AdminUser);
        query.equalTo("role", "admin");
        query.equalTo("id", id);
        const result = await query.first();
        //TODO what can be edited
        if (newAdminInfo.password)
            result.setPassword(password);

        return result;
    };

    async function remove() {
        const query = new Parse.Query(AdminUser);
        query.equalTo("role", "admin");
        query.equalTo("id", id);
        const result = await query.first();
        result.destroy().then((myObject) => {
            return true;
        }, (error) => {
            throw new Error(error);
        });
    };

    async function exists({ username, email, phoneNumber }) {
        let exists = false;
        if (username) {
            const query = new Parse.Query(AdminUser);
            query.equalTo("role", "admin");
            query.equalTo('username', username);
            let result = await query.first();
            exists = result ? true : exists;
        }

        if (email) {
            const query = new Parse.Query(AdminUser);
            query.equalTo("role", "admin");
            query.equalTo('email', email);
            let result = await query.first();
            exists = result ? true : exists;
        }

        if (phoneNumber) {
            const query = new Parse.Query(AdminUser);
            query.equalTo("role", "admin");
            query.equalTo('phoneNumber', phoneNumber);
            let result = await query.first();
            exists = result ? true : exists;
        }

        return exists;
    };

    async function login({ ...loginInfo }) {
        const { username, password } = loginInfo;
        const user = await Parse.User.logIn(username, password);
        return convertToCustomerEntity(user);
    };

    async function logout({ ...logoutInfo }) {
        const user = await Parse.User.logOut()
        return user;
    };


    function convertToAdminEntity(adminDTO) {
        return new Admin(
            adminDTO.get('firstName'),
            adminDTO.get('lastName'),
            adminDTO.get('username'),
            adminDTO.email,
            adminDTO.get('phoneNumber'),
            adminDTO.get("password"),
            adminDTO.id,
        );
    };
}   