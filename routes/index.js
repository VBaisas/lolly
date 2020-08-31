var express = require('express');
var router = express.Router();
var BankAccount = require('../models/bank_account');

router.get('/', function(req, res, next) {
  BankAccount.find(function (err, bankAccounts) {
      if (err) console.log(err)

      res.render('index', { bankAccounts: bankAccounts, title: 'Lolly' });
  });
});

module.exports = router;
