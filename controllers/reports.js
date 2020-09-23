var express = require('express');
var mongoose = require('mongoose');
var Transaction = require('../models/transaction');

exports.spendingOverTime = function(req, res) {
  
  Transaction.aggregate([
    { $match : { type : "Expense" } },
    {$group: {_id: '$date', 'transactionAmount': {$sum: { $multiply: [ -1,'$amount'] }}}},
    {$sort: { _id: 1 }},
    {$group: { _id: null, 'date': {$push: '$_id'}, 'transactionAmount': {$push: '$transactionAmount'}}}
  ], (function (err, transactionsAggregate) {
        if (err) console.log(err)
        res.render('reports/spending_over_time', { transactionsAggregate: transactionsAggregate, title: 'Lolly | Reports' });
        console.log(transactionsAggregate[0].date, transactionsAggregate[0].transactionAmount);
    }));
    
};

exports.incomeOverTime = function(req, res) {
  
  Transaction.aggregate([
    { $match : { type : "Income" } },
    { $group: {_id: '$date', 'transactionAmount': {$sum: '$amount'}}},
    { $sort: { _id: 1 }},
    { $project:
    {
      year: { $year: "$_id" },
      month: { $month: "$_id" },
      day: { $dayOfMonth: "$_id" },
      transactionAmount: 1}
    },
  ], (function (err, transactionsAggregate) {
        if (err) console.log(err)
        res.render('reports/income_over_time', { transactionsAggregate: transactionsAggregate, title: 'Lolly | Reports' });
        console.log(transactionsAggregate);
    }));
    
};
