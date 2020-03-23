"use strict"

const router = require('express').Router();
const CountryController = require('../controllers/CountryController.js');

router.get('/', CountryController.getCountries);

module.exports = router;