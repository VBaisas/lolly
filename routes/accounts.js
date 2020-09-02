var express = require('express');
var accountController = require('../controllers/accounts');
var router = express.Router();

router 
  .route('/manage_accounts')
  .get(accountController.accountsInputForm)
  .post(accountController.create)

module.exports = router;