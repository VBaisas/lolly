var express = require('express');
var Account = require('../models/account');
var Transaction = require('../models/transaction');
const mongoose = require('mongoose');

/*exports.indexPage = function(req, res) {

  Account.find(function (err, accounts) {
    if (err) console.log(err)
    res.render('index', { accounts: accounts, title: 'Lolly | Overview' });
  });
  };*/

exports.indexPage = function(req, res) {
  
  Account.aggregate([
    {
      $lookup: {
         from: "transactions",
         localField: "_id",
         foreignField: "account",
         as: "fromTransactions"
      }
    },
    { $unwind: { path: "$fromTransactions", preserveNullAndEmptyArrays: true } },
    {
      $group:
        {
          _id: "$_id",
          balance : { $first: '$balance' },
          description : { $first: '$description' },
          type : { $first: '$type' },
          transactionsSum : { $sum : '$fromTransactions.amount' }
        }
    },
    {
      $addFields: { 
        currentBalance: { $sum: ['$balance', '$transactionsSum'] }}}
  ], (function (err, accountsAggregate) {
        if (err) console.log(err)
        res.render('index', { accountsAggregate: accountsAggregate, title: 'Lolly | Overview' });
        console.log(accountsAggregate);
    }));
    
};  



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
        res.redirect('/accounts');
        console.log('Account saved successfully!');
    }

  });
  
};

exports.accountDeleteDetails = function(req, res, next) {

  Account.findById(req.params.id, function (err, account) {
      if (err) 
        res.redirect('/accounts');
      res.render('accounts/delete_account', { title: 'Delete Account', account:  account});
  })

};

exports.accountDelete = function(req, res, next) {
    
  Account.findByIdAndDelete(req.body.id, function deleteAccount(err) {
      if (err) { return next(err); }
      res.redirect('/accounts');
      });

};
