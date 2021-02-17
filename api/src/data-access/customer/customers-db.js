module.exports = function makeCustomersDb({ makeDb }) {
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

    async function insert(customer) {
        const db = await makeDb();
        const result = await db.insert(customer);
        return result;
    }

    async function update({ id, ...customerInfo }) {
        const db = await makeDb()
        const result = await db.update({ id, customerInfo })
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
        const result = await db.logout({ logoutInfo });
        return result;
    }
}   