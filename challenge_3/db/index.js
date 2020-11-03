const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/practice')

const db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected, success!');
});

//define a schema
const purchaseSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  street: String,
  city: String,
  state: String,
  zipcode: String,
  creditCard: String,
  expiryDate: String,
  CVV: String,
  billingZipcode: String,
})

const User = mongoose.model('User', purchaseSchema);

module.exports = { User };