const { removeDoctor, addDoctor, editDoctor, listDoctors, getDoctorById, doctorLogin } = require('../../application/use-cases/doctor');
const doctorSubControllersFactory = require('./doctor-services');


const deleteDoctor = doctorSubControllersFactory.makeDeleteDoctor({ removeDoctor });
const getDoctors = doctorSubControllersFactory.makeGetDoctors({ listDoctors });
const postAddDoctor = doctorSubControllersFactory.makeAddDoctor({ addDoctor, doctorLogin });
const postEditDoctor = doctorSubControllersFactory.makeEditDoctor({ editDoctor });
const getDoctor = doctorSubControllersFactory.makeGetDoctor({ getDoctorById });
const loginDoctor = doctorSubControllersFactory.makeLoginDoctor({ doctorLogin });

const doctorControllers = {
    deleteDoctor,
    getDoctors,
    postAddDoctor,
    postEditDoctor,
    getDoctor,
    loginDoctor,
};

module.exports = {
    doctorControllers, deleteDoctor, getDoctors, postAddDoctor, postEditDoctor, getDoctor,
    loginDoctor,
};



