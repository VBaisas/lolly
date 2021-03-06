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
       get: getBalance,
       required: [true, 'Balance is required.']
   }
});

accountSchema.virtual('accountName').get(function() {
    return this.type + ": " + this.description;
  });

accountSchema.virtual('url').get(function() {
    return '/accounts/' + this._id;
  });

function getBalance(num){
    return num.toFixed(2);
}

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;