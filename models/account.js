const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
   type: {
       type: String,
       required: [true, 'Account type is required.'],
   },
   description: {
       type: String,
       required: [true, 'Account description is required.']
   },
   balance: {
       type: Number,
       required: [true, 'Balance is required.']
   }
});

const Accounts = mongoose.model('Accounts', accountSchema);

module.exports = Accounts;