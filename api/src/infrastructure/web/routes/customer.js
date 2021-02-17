const express = require('express');
const { customerControllers: controller } = require('../../../controllers/customer');
const makeCallBack = require('../utils/express-callback');
// address - api/customers
// load dependencies
const customersRouter = () => {
    const router = express.Router();

    // load controller with dependencies
    router.route('/')
        .get(makeCallBack(controller.getCustomers))
        .post((makeCallBack(controller.postAddCustomer)));
    router.route('/:customerId')
        .get(makeCallBack(controller.getCustomer))
        .post(makeCallBack(controller.postEditCustomer));
    router.route('/remove/:customerId')
        .post(makeCallBack(controller.deleteCustomer));
    return router;
};

module.exports = customersRouter;