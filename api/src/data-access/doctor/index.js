const makeDoctorsDbInterface = require('./doctors-db');
const makeDoctorsDbMongo = require('../../infrastructure/database/mongodb/doctor');

module.exports =  async function makeDb () {
  const db = await makeDoctorsDbMongo();
  return db;
}

const doctorsDb = makeDoctorsDbInterface({ makeDb })
module.exports = doctorsDb;