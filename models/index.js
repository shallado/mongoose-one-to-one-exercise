const mongoose = require('mongoose');
const Customer = require('./customer')(mongoose);
const Identifier = require('./identifier')(mongoose);

mongoose.connect('mongodb://127.0.0.1/mongoose-one-to-one-exercise', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log({ 
    message: 'Successfully connected to the database' 
  }))
  .catch((err) => console.log({
    message: 'Unable to connect to database',
    error: err
  }));

module.exports = {
  Customer,
  Identifier
};