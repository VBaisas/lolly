var express = require('express');
var Transaction = require('../models/transaction');

exports.transactionsInputForm = function(req, res) {
    res.render('transactions/index', { transaction: {}, errors: [] });
};

/*exports.create = function(req, res) {
    var type = req.body.type;
    var description = req.body.description;
    var balance = req.body.balance;

    var newAccount = new Account({
      description: description,
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