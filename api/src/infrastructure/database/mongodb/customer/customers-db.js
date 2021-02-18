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
        const query = {};
        const result = await db.findAll(query);
        return (await result.toArray()).map(({ _id: id, ...found }) => ({
            id,
            ...found
        }));
    }

    async function findById({ id }) {
        const db = await makeDb();
        const result = await db.findById(id);
        const found = await result.toArray();
        if (found.length === 0) {
            return null
        }
        const { _id: id, ...info } = found[0];
        return { id, ...info };
    }

    async function findByEmail({ email }) {
        const db = await makeDb();
        const query = { email };
        const result = await db.findByEmail(query);
        return (await result.toArray()).map(({ _id: id, ...found }) => ({
            id,
            ...found
        }));
    }

    async function insert({ id: _id = Id.makeId(), ...customerInfo }) {
        const db = await makeDb()
        const result = await db
            .collection('customers')
            .insertOne({ _id, ...customerInfo })
        const { _id: id, ...insertedInfo } = result.ops[0]
        return { id, ...insertedInfo }
    }

    async function update({ id: _id, ...customerInfo }) {
        const db = await makeDb()
        const result = await db
            .collection('customers')
            .updateOne({ _id }, { $set: { ...customerInfo } })
        return result.modifiedCount > 0 ? { id: _id, ...customerInfo } : null
    }

    async function remove({ id: _id }) {
        const db = await makeDb()
        const result = await db.collection('customers').deleteOne({ _id })
        return result.deletedCount
    }
}   