var express = require('express');
var router = express.Router();
var accountController = require('../controllers/accounts');

router
  .route('/')
  .get(accountController.indexPage)
  .post(accountController.create)

module.exports = router;
