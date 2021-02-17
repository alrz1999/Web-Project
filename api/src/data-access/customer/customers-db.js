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

    async function findById({ id }) {
        const db = await makeDb();
        const result = await db.findById(id);
        return result;
    }

    async function findByEmail({ email }) {
        const db = await makeDb();
        const result = await db.findByEmail({ email });
        return result;
    }

    async function insert({ id: _id = Id.makeId(), ...customerInfo }) {
        const db = await makeDb();
        const result = await db.insert({ _id, ...customerInfo });
        return result;
    }

    async function update({ id: _id, ...customerInfo }) {
        const db = await makeDb()
        const result = await db.update({ _id }, { $set: { ...customerInfo } })
        return result.modifiedCount > 0 ? { id: _id, ...customerInfo } : null
    }

    async function remove({ id: _id }) {
        const db = await makeDb();
        const result = await db.remove(_id);
        return result;
    }
}   