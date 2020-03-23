"use strict"

const router = require('express').Router();
const CountryController = require('./controllers/CountryController.js');

router.get('/countries', CountryController.getCountries);

module.exports = router;