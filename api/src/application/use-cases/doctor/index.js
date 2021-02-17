const makeAddDoctor = require('./create-doctor');
const makeDeleteDoctor = require('./delete-doctor');
const makeEditDoctor = require('./edit-doctor');
const makeListDoctors = require('./list-doctors');
const makeGetDoctor = require('./get-doctor');
const makeDoctorLogin = require('./doctor-login');


const doctorsDb = require('../../../data-access/doctor');
const { authService } = require('../../security')

const addDoctor = makeAddDoctor({ doctorsDb });
const editDoctor = makeEditDoctor({ doctorsDb });
const listDoctors = makeListDoctors({ doctorsDb });
const removeDoctor = makeDeleteDoctor({ doctorsDb });
const getDoctor = makeGetDoctor({ doctorsDb });
const doctorLogin = makeDoctorLogin({ doctorsDb, authService });

const doctorService = Object.freeze({
    addDoctor,
    editDoctor,
    listDoctors,
    removeDoctor,
    getDoctor,
    doctorLogin
});

module.exports = { doctorService, addDoctor, editDoctor, listDoctors, removeDoctor, getDoctor, doctorLogin };