"use strict"

const router = require('express').Router();
const ReportController = require('./controllers/ReportController.js');

router.get('/', ReportController.getReports);
router.post('/', ReportController.sendReports);
router.delete('/:id', ReportController.deleteReports);

module.exports = router;