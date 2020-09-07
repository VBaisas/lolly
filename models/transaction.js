const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    /*account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    },*/
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
      required: [true, 'Transaction amount is required.']
    },
    description: {
      type: String
     },
    type: {
      type: String
   }
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;