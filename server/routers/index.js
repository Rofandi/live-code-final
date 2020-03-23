"use strict"

const router = require('express').Router();
const countriesRouter = require('./countriesRouter.js');
const reportsRouter = require('./reportsRouter.js');

router.use('/countries', countriesRouter);
router.use('/reports', reportsRouter);

module.exports = router;