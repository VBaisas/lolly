const mongoose = require('mongoose');
var moment = require('moment');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    account: {
      type: Schema.Types.ObjectId,
      ref: 'Account',
      required: [true, 'Account is required.'],    
    },
    category: {
      type: String,
      required: [true, 'Category is required.'],
    },
    date: {
      type: Date,
      required: [true, 'Transaction date is required.']
    },
    amount: {
      type: Number,
      get: getAmount,
      set: setAmount,
      required: [true, 'Amount is required.']
  },
    description: {
      type: String
     },
    type: {
      type: String,
      required: [true, 'Transaction type is required.']
   }
});

transactionSchema.virtual('date_mm_dd_yyyy').get(function() {
  return moment(this.date).format('MM-DD-YYYY');
});

function getAmount(num){
  return (num/100).toFixed(2)
};

function setAmount(num){
  return num*100
};

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;