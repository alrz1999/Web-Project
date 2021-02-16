const express = require('express');
const customers = require('./customer');
const admins = require('./admin');
const doctors = require('./doctor');

const apiRouter = () => {
    const routes = express.Router();

    const customersRouter = customers();
    const adminsRouter = admins();
    const doctorsRouter = doctors();


    routes.use('/customers', customersRouter);
    routes.use('/admins', adminsRouter);
    routes.use('/doctors', doctorsRouter);

    return routes;
};

module.exports = apiRouter;