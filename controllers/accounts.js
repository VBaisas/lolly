var express = require('express');
var Account = require('../models/account');
const mongoose = require('mongoose');

exports.accountsInputForm = function(req, res) {

  Account.find(function (err, accounts) {
    if (err) console.log(err)
    res.render('accounts/manage_accounts', { accounts: accounts, title: 'Lolly | Accounts', errors: [] });
  })
};

exports.create = function(req, res) {
  var _id = new mongoose.Types.ObjectId();
  var type = req.body.type;
  var description = req.body.description;
  var balance = req.body.balance;

  var newAccount = new Account({
    _id: _id,
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
  
};

exports.accountDeleteDetails = function(req, res, next) {

  Account.findById(req.params.id, function (err, account) {
      if (err) { return next(err); }
      if (account==null) {
          res.redirect('/accounts');
      }
      res.render('accounts/delete_account', { title: 'Delete Account', account:  account});
  })

};

exports.accountDelete = function(req, res, next) {
    
  Account.findByIdAndDelete(req.body.id, function deleteAccount(err) {
      if (err) { return next(err); }
      res.redirect('/');
      });

};
