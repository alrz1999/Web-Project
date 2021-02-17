module.exports = function makeDoctorsDb({ makeDb }) {
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
        return (await result.toArray()).map(({ ...found }) => ({
            ...found
        }));
    }

    async function findById(id) {
        const db = await makeDb();
        const result = await db.findById(id);
        const found = await result.toArray();
        if (found.length === 0) {
            return null
        }
        const { ...info } = found[0];
        return { ...info };
    }

    async function findByEmail(email) {
        const db = await makeDb();
        const query = { email };
        const result = await db.findByEmail(query);
        return (await result.toArray()).map(({ ...found }) => ({
            ...found
        }));
    }

    async function insert(id, ...doctorInfo) {
        const db = await makeDb()
        const result = await db
            .collection('doctors')
            .insertOne({ id, ...doctorInfo })
        const { ...insertedInfo } = result.ops[0]
        return { ...insertedInfo }
    }

    async function update(id, ...doctorInfo) {
        const db = await makeDb()
        const result = await db
            .collection('doctors')
            .updateOne({ id }, { $set: { ...doctorInfo } })
        return result.modifiedCount > 0 ? { id, ...doctorInfo } : null
    }

    async function remove(id) {
        const db = await makeDb()
        const result = await db.collection('doctors').deleteOne({ id })
        return result.deletedCount
    }
}   