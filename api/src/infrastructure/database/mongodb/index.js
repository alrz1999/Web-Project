// const mongodb = require('mongodb');

// const MongoClient = mongodb.MongoClient
// const url = process.env.DM_CUSTOMERS_DB_URL
// const dbName = process.env.DM_CUSTOMERS_DB_NAME
// const client = new MongoClient(url, { useNewUrlParser: true })

// module.exports = async function makeDb(databaseName = null) {
//     if (!client.isConnected()) {
//         await client.connect()
//     }
//     databaseName = !databaseName ? dbName : databaseName;
//     return client.db(databaseName)
// }
