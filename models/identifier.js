const Identifier = (mongoose) => {
  const identifierSchema = new mongoose.Schema({
    cardCode: String,
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer'
    }
  });

  const Identifier = mongoose.model('Identifier', identifierSchema);

  return Identifier;
};

module.exports = Identifier

