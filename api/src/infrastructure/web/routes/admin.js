const express = require('express');
const { adminControllers: controller } = require('../../../controllers/admin');
const makeCallBack = require('../utils/express-callback');
// address - api/admins
// load dependencies
const adminsRouter = () => {
    const router = express.Router();

    // load controller with dependencies


    router.route('/remove/:adminId')
        .post(makeCallBack(controller.deleteAdmin));
    router.route('/login')
        .post(makeCallBack(controller.loginAdmin));
    router.route('/:adminId')
        .get(makeCallBack(controller.getAdmin))
        .post(makeCallBack(controller.postEditAdmin));
    router.route('/')
        .get(makeCallBack(controller.getAdmins))
        .post((makeCallBack(controller.postAddAdmin)));
    return router;
};

module.exports = adminsRouter;