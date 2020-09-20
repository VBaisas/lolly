var express = require('express');
var accountController = require('../controllers/accounts');
var router = express.Router();

router 
  .route('/')
  .get(accountController.accountsInputForm)
  .post(accountController.create)

router
  .route('/:id/delete')
  .get(accountController.accountDeleteDetails)
  .post(accountController.accountDelete)

module.exports = router;