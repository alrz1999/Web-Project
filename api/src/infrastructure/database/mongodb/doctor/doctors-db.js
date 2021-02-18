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

    async function insert({ id: _id = Id.makeId(), ...doctorInfo }) {
        const db = await makeDb()
        const result = await db
            .collection('doctors')
            .insertOne({ _id, ...doctorInfo })
        const { _id: id, ...insertedInfo } = result.ops[0]
        return { id, ...insertedInfo }
    }

    async function update({ id: _id, ...doctorInfo }) {
        const db = await makeDb()
        const result = await db
            .collection('doctors')
            .updateOne({ _id }, { $set: { ...doctorInfo } })
        return result.modifiedCount > 0 ? { id: _id, ...doctorInfo } : null
    }

    async function remove({ id: _id }) {
        const db = await makeDb()
        const result = await db.collection('doctors').deleteOne({ _id })
        return result.deletedCount
    }
}   