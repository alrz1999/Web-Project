const { removeDoctor, addDoctor, editDoctor, listDoctors, getDoctor, doctorLogin } = require('../../application/use-cases/doctor');
const doctorSubControllersFactory = require('./doctor-services');


const deleteDoctor = doctorSubControllersFactory.makeDeleteDoctor({ removeDoctor });
const getDoctor = doctorSubControllersFactory.makeGetDoctors({ listDoctors });
const postAddDoctor = doctorSubControllersFactory.makeAddDoctor({ addDoctor });
const postEditDoctor = doctorSubControllersFactory.makeEditDoctor({ editDoctor });
const getDoctor = doctorSubControllersFactory.makeGetDoctor({ getDoctor });
const loginDoctor = doctorSubControllersFactory.makeloginDoctor({ doctorLogin });

const doctorControllers = {
    deleteDoctor,
    getDoctors: getDoctor,
    postAddDoctor,
    postEditDoctor,
    getDoctor,
    loginDoctor,
};

module.exports = {
    doctorControllers, deleteDoctor, getDoctor, postAddDoctor, postEditDoctor, getDoctor,
    loginDoctor,
};



