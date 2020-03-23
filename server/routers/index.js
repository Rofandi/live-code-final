"use strict"

const router = require('express').Router();
const countriesRouter = require('./countriesRouter.js');
const reportsRouter = require('./reportsRouter.js');
const usersRouter = require('./usersRouter.js');
const Authentication = require('../middleware/Authentication.js');
const Authorization = require('../middleware/Authorization.js');

router.use('/countries', countriesRouter);
router.use('/reports', Authentication, Authorization, reportsRouter);
router.use('/users', usersRouter);

module.exports = router;