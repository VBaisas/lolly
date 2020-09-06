var express = require('express');
var router = express.Router();
var Accounts = require('../models/account');

router.get('/', function(req, res, next) {
  Accounts.find(function (err, accounts) {
      if (err) console.log(err)

      res.render('index', { accounts: accounts, title: 'Lolly' });
  });
});

module.exports = router;
