const Parse = require('parse/node');

module.exports = function makeDoctorsDb() {
    return Object.freeze({
        findAll,
        findById,
        findByEmail,
        insert,
        remove,
        update
    });

    async function findAll() {
        const Customer = Parse.Object.extend("Customer");
        const query = new Parse.Query(Customer);
        // query.equalTo("playerName", "Dan Stemkoski");
        const results = await query.find();
        return (await result.toArray());
    }

    async function findById({ id }) {
        const Customer = Parse.Object.extend("Customer");
        const query = new Parse.Query(Customer);
        query.equalTo("id", id);
        const result = await query.find();
        const found = await result.toArray();
        if (found.length === 0) {
            return null
        }
        const { id: _id, ...info } = found[0];
        return { _id, ...info };
    }

    async function findByEmail({ email }) {
        const Customer = Parse.Object.extend("Customer");
        const query = new Parse.Query(Customer);
        query.equalTo("email", email);
        const result = await query.find();
        const found = await result.toArray();
        if (found.length === 0) {
            return null
        }
        const { id: _id, ...info } = found[0];
        return { _id, ...info };
    }

    async function insert({ customer }) {
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