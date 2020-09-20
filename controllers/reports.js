var express = require('express');
var mongoose = require('mongoose');
var Transaction = require('../models/transaction');

exports.spendingOverTime = function(req, res) {
  
  Transaction.find(function (err, transactions) {
        if (err) console.log(err)
        res.render('reports/spending_over_time', { transactions: transactions, title: 'Lolly | Reports' });
    });
    
};