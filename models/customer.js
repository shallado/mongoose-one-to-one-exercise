const Customer = (mongoose) => {
  const customerSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String
  });

  const Customer = mongoose.model('Customer', customerSchema);

  return Customer;
};

module.exports = Customer;