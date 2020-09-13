var express = require('express');
var Transaction = require('../models/transaction');
var Account = require('../controllers/accounts');

exports.expensesInputForm = function(req, res) {
    res.render('transactions/expenses', { transaction: {}, errors: [] });
};

exports.incomeInputForm = function(req, res) {
  res.render('transactions/income', { transaction: {}, errors: [] });
};

/*exports.create = function(req, res) {
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
};*/

exports.create = function(req, res) {
  var account = Account.create._id;
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