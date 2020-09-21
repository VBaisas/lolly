var express = require('express');
var transactionController = require('../controllers/transactions.js');
var router = express.Router();

router 
  .route('/')
  .get(transactionController.expensesInputAndList)
  .post(transactionController.createExpense)

router 
  .route('/expenses')
  .get(transactionController.expensesInputAndList)
  .post(transactionController.createExpense)

  router 
  .route('/income')
  .get(transactionController.incomeInputAndList)
  .post(transactionController.createIncome)

module.exports = router;