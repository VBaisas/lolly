var express = require('express');
var Transaction = require('../models/transaction');

exports.transactionsInputForm = function(req, res) {
    res.render('transactions/index', { transaction: {}, errors: [] });
};

exports.create = function(req, res) {
    //var account = req.body.account;
    var category = req.body.category;
    var date = req.body.date;
    var amount = req.body.amount;
    var description = req.body.description;

    var newTransaction = new Transaction({
      //account: account,
      category: category,
      date: date,
      amount: amount,
      description: description
    });

    newTransaction.save(function(err) {
      if (err) {
          res.render('/', { transaction: newTransaction, errors: err.errors });
      } else {
          res.redirect('transactions');
          console.log('Account saved successfully!');
      }

    });
};