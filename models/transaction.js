const mongoose = require('mongoose');
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
      required: [true, 'Transaction amount is required.']
    },
    description: {
      type: String
     },
    type: {
      type: String,
      required: [true, 'Transaction type is required.']
   }
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;