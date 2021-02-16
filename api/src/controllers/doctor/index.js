const { removeDoctor, addDoctor, editDoctor, listDoctors } = require('../../application/use-cases/doctor');
const doctorSubControllersFactory = require('./doctor-services');


const deleteDoctor = doctorSubControllersFactory.makeDeleteDoctor({ removeDoctor });
const getDoctor = doctorSubControllersFactory.makeGetDoctors({ listDoctors });
const postAddDoctor = doctorSubControllersFactory.makeAddDoctor({ addDoctor });
const postEditDoctor = doctorSubControllersFactory.makeEditDoctor({ editDoctor });

const doctorControllers = {
    deleteDoctor,
    getDoctor,
    postAddDoctor,
    postEditDoctor
};

module.exports = { doctorControllers, deleteDoctor, getDoctor, postAddDoctor, postEditDoctor };



