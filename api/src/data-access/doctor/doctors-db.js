module.exports = function makeDoctorsDb({ makeDb }) {
    return Object.freeze({
        findAll,
        findById,
        findByEmail,
        findByPhoneNumber,
        insert,
        remove,
        update,
        login,
        logout,
        exists
    });

    async function findAll() {
        const db = await makeDb();
        const result = await db.findAll();
        return result;
    }

    async function findById(id) {
        const db = await makeDb();
        const result = await db.findById(id);
        return result;
    }

    async function findByEmail(email) {
        const db = await makeDb();
        const result = await db.findByEmail(email);
        return result;
    }

    async function findByPhoneNumber(phoneNumber) {
        const db = await makeDb();
        const result = await db.findByPhoneNumber(phoneNumber);
        return result;
    }

    async function insert(doctor) {
        const db = await makeDb();
        const result = await db.insert(doctor);
        return result;
    }

    async function update({ id, ...doctorInfo }) {
        const db = await makeDb()
        const result = await db.update({ id, doctorInfo })
        return result;
    }

    async function remove(id) {
        const db = await makeDb();
        const result = await db.remove(id);
        return result;
    }

    async function login({ ...loginInfo }) {
        const db = await makeDb();
        const result = await db.login(loginInfo);
        return result;
    }

    async function logout({ ...logoutInfo }) {
        const db = await makeDb();
        const result = await db.logout(logoutInfo);
        return result;
    }

    async function exists({ email, phoneNumber, medicalNumber }) {
        const db = await makeDb();
        const result = await db.login({ email, phoneNumber, medicalNumber });
        return result;
    }
}   