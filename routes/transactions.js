var express = require('express');
var transactionController = require('../controllers/transactions.js');
var router = express.Router();

router 
  .route('/transactions')
  .get(transactionController.transactionsInputForm)
  //.post(accountController.create)

module.exports = router;