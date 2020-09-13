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
       get: getPrice,
       set: setPrice,
       required: [true, 'Balance is required.']
   }
});

function getPrice(num){
    return (num/100).toFixed(2);
}

function setPrice(num){
    return num*100;
}

const Account = mongoose.model('Accounts', accountSchema);

module.exports = Account;