const makeDoctorsDbInterface = require('./doctors-db');
const makeDoctorsDbMongo = require('../../infrastructure/database/parse-server/doctor/doctors-db');

const makeDb = async function () {
  const db = await makeDoctorsDbMongo();
  return db;
}

const doctorsDb = makeDoctorsDbInterface({ makeDb })
module.exports = doctorsDb;