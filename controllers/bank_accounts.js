var express = require('express');
var BankAccount = require('../models/bank_account');

exports.accountsInputForm = function(req, res) {
    res.render('bank_accounts/manage_accounts', { bankAccount: {}, errors: [] });
};

/*exports.create = function(req, res) {
    var name = req.body.name;
    var type = req.body.type;
    var balance = req.body.balance;

    var newBankAccount = new BankAccount({
      name: name,
      type: type,
      balance: balance
    });

    newBankAccount.save(function(err) {
      if (err) {
          res.render('bank_accounts/manage_accounts', { bankAccount: newBankAccount, errors: err.errors });
      } else {
          res.redirect('/');
          console.log('Bank account saved successfully!');
      }

    });
};*/