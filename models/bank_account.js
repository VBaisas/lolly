var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bankAccountSchema = new Schema({
   name: {
       type: String,
       required: [true, 'Account name is required.'],
   },
   type: {
       type: String,
       required: [true, 'Account type is required.']
   }
   ,
   balance: {
       type: Number,
       required: [true, 'Balance is required.']
   }
})

var bankAccount = mongoose.model('User', userSchema);

module.exports = bankAccount;