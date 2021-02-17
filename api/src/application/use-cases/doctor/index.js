const makeAddDoctor = require('./create-doctor');
const makeDeleteDoctor = require('./delete-doctor');
const makeEditDoctor = require('./edit-doctor');
const makeListDoctors = require('./list-doctors');

const doctorsDb = require('../../../data-access/doctor');

const addDoctor = makeAddDoctor({ doctorsDb });
const editDoctor = makeEditDoctor({ doctorsDb });
const listDoctors = makeListDoctors({ doctorsDb });
const removeDoctor = makeDeleteDoctor({ doctorsDb });

const doctorService = Object.freeze({
    addDoctor,
    editDoctor,
    listDoctors,
    removeDoctor
});

module.exports = { doctorService, addDoctor, editDoctor, listDoctors, removeDoctor };