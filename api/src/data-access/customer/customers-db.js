module.exports = function makeCustomersDb({ makeDb }) {
    return Object.freeze({
        findAll,
        findById,
        findByEmail,
        insert,
        remove,
        update
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
        const result = await db.findByEmail({ email });
        return result;
    }

    async function insert({ ...customerInfo }) {
        const db = await makeDb();
        const result = await db.insert({ ...customerInfo });
        return result;
    }

    async function update({ id, ...customerInfo }) {
        const db = await makeDb()
        const result = await db.update(id, { ...customerInfo })
        return result.modifiedCount > 0 ? { id, ...customerInfo } : null
    }

    async function remove({ id }) {
        const db = await makeDb();
        const result = await db.remove(id);
        return result;
    }
}   