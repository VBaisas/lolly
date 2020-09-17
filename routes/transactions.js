var express = require('express');
var transactionController = require('../controllers/transactions.js');
var router = express.Router();

router 
  .route('/')
  .get(transactionController.expensesInputAndList)
  .post(transactionController.create)

router 
  .route('/expenses')
  .get(transactionController.expensesInputAndList)
  .post(transactionController.create)

router 
  .route('/income')
  .get(transactionController.incomeInputForm)
  .post(transactionController.create)

router 
  .route('/expenses/:id/delete')
  .get(transactionController.expensesInputAndList)
  .post(transactionController.create)

module.exports = router;