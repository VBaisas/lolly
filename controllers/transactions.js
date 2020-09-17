var express = require('express');
var async = require('async');
var Transaction = require('../models/transaction');
var Account = require('../models/account');

exports.expensesInputAndList = function(req, res, next) {

  async.parallel({
      accounts: function(callback) {
          Account.find(callback);
      },
      transactions: function(callback) {
        Transaction.find({ type: 'Expense' }).populate('account').exec(callback);

      },
  }, function(err, results) {
      if (err) { return next(err); }
      res.render('transactions/expenses', { title: 'Lolly | Transactions | Expenses', accounts: results.accounts, transactions: results.transactions});
  });

};

/*exports.incomeInputForm = function(req, res, next) {

  Account.find(function (err, accounts) {
    if (err) console.log(err)
   res.render('transactions/income', {title: 'Lolly | Transactions | Income', accountList: accounts, errors: [] } );
 });
};*/

exports.create = function(req, res) {
  var account = req.body.account;
  var category = req.body.category;
  var date = req.body.date;
  var amount = req.body.amount;
  var description = req.body.description;
  var type = req.body.type;

  var newTransaction = new Transaction({
    account: account,
    category: category,
    date: date,
    amount: amount,
    description: description,
    type: type
  });

  newTransaction.save(function(err) {
    if (err) {
        res.redirect('/transactions');
        console.log(err);
    } else if (type === 'Income') {
        res.redirect('/transactions/income');
        console.log('Transaction saved successfully!');          
    } else {
        res.redirect('/transactions/expenses');
        console.log('Transaction saved successfully!');
    }

  });
};