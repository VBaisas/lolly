var express = require('express');
var Account = require('../models/account');

exports.accountsInputForm = function(req, res) {
    res.render('accounts/manage_accounts', { account: {}, errors: [] });
};

/*exports.create = function(req, res) {
    var name = req.body.name;
    var type = req.body.type;
    var balance = req.body.balance;

    var newAccount = new Account({
      name: name,
      type: type,
      balance: balance
    });

    newAccount.save(function(err) {
      if (err) {
          res.render('accounts/manage_accounts', { account: newAccount, errors: err.errors });
      } else {
          res.redirect('/');
          console.log('Account saved successfully!');
      }

    });
};*/