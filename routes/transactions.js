var express = require('express');
var transactionController = require('../controllers/transactions.js');
var router = express.Router();

router 
  .route('/transactions')
  .get(transactionController.expensesInputForm)
  .post(transactionController.create)

router 
  .route('/transactions/expenses')
  .get(transactionController.expensesInputForm)
  .post(transactionController.create)

  router 
  .route('/transactions/income')
  .get(transactionController.incomeInputForm)
  .post(transactionController.create)

module.exports = router;