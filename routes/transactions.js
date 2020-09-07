var express = require('express');
var transactionController = require('../controllers/transactions.js');
var router = express.Router();

router 
  .route('/transactions')
  .get(transactionController.transactionsInputForm)
  .post(transactionController.create)

router 
  .route('/transactions/expenses')
  .get(transactionController.transactionsInputForm)
  .post(transactionController.create)

module.exports = router;