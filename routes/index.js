var express = require('express');
var router = express.Router();
var Account = require('../models/account');

router.get('/', function(req, res, next) {
  Account.find(function (err, accounts) {
      if (err) console.log(err)

      res.render('index', { accounts: accounts, title: 'Lolly | Overview' });
  });
});

module.exports = router;
