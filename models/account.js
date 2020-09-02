var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AccountSchema = new Schema({
   name: {
       type: String,
       required: [true, 'Account name is required.'],
   },
   type: {
       type: String,
       required: [true, 'Account type is required.']
   },
   balance: {
       type: Number,
       required: [true, 'Balance is required.']
   }
})

var Account = mongoose.model('Account', AccountSchema);

module.exports = Account;