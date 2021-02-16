const express = require('express');
const { adminControllers: controller } = require('../../../controllers/admin');
const makeCallBack = require('../utils/express-callback');
// address - api/admins
// load dependencies
const adminsRouter = () => {
    const router = express.Router();

    // load controller with dependencies
    router.route('/')
        .get(makeCallBack(controller.getAdmins))
        .postmakeCallBack((makeCallBack(controller.postAddAdmin)));
    router.route('/:adminId')
        .get(makeCallBack(controller.getAdmin))
        .post(makeCallBack(controller.postEditAdmin));
    router.route('/remove/:adminId')
        .post(makeCallBack(controller.deleteAdmin));
    return router;
};

module.exports = adminsRouter;