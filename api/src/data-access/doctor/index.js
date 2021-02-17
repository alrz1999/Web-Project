const makeDoctorsDbInterface = require('./doctors-db');
const makeDoctorsDb_parse = require('../../infrastructure/database/parse-server/doctor/doctors-db');

const makeDb = async function () {
    const db = await makeDoctorsDb_parse();
    return db;
}

const doctorsDb = makeDoctorsDbInterface({ makeDb })
module.exports = doctorsDb;