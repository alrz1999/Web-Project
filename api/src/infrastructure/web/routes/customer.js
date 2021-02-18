const express = require('express');
const { customerControllers: controller } = require('../../../controllers/customer');
const makeCallBack = require('../utils/express-callback');
const authenticate = require('../utils/auth-callback');
// address - api/customers
// load dependencies
const customersRouter = () => {
    const router = express.Router();

    // load controller with dependencies

    router.route('/remove/:customerId')
        .post(makeCallBack(controller.deleteCustomer));
    router.route('/login')
        .post(makeCallBack(controller.loginCustomer));
    router.route('/appointments')
        .post(authenticate('customer'), makeCallBack(controller.fillAppointment));
    router.route('/:customerId')
        .get(makeCallBack(controller.getCustomer))
        .post(makeCallBack(controller.postEditCustomer));
    router.route('/')
        .get(authenticate(), makeCallBack(controller.getCustomers))
        .post((makeCallBack(controller.postAddCustomer)));
    return router;
};

module.exports = customersRouter;