const express = require('express');
const { doctorControllers: controller } = require('../../../controllers/doctor');
const makeCallBack = require('../utils/express-callback');
// address - api/doctors
// load dependencies
const doctorsRouter = () => {
    const router = express.Router();

    // load controller with dependencies

    router.route('/remove/:doctorId')
        .post(makeCallBack(controller.deleteDoctor));
    router.route('/login')
        .post(makeCallBack(controller.loginDoctor));
        router.route('appointments/:doctorId')
        .get(makeCallBack(controller.getDoctor))
        .post(makeCallBack(controller.postEditDoctor));
    router.route('/:doctorId')
        .get(makeCallBack(controller.getDoctor))
        .post(makeCallBack(controller.postEditDoctor));
    router.route('/')
        .get(makeCallBack(controller.getDoctors))
        .post((makeCallBack(controller.postAddDoctor)));
    return router;
};

module.exports = doctorsRouter;