var express = require('express');
var reportController = require('../controllers/reports');
var router = express.Router();

router 
  .route('/spending_over_time')
  .get(reportController.spendingOverTime)

module.exports = router;