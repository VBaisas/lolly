var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var accountSchema = new Schema({
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

var Account = mongoose.model('Account', accountSchema);

module.exports = Account;