const { Identifier } = require('../models');

const createIdentifier = (customerId) => {
  const cardCode = customerId.substring(0, 10).toUpperCase();
  const customer = customerId;
  const identifierInfo = {
    cardCode,
    customer
  };

  Identifier.create(identifierInfo)
    .then((identifierData) => console.log(identifierData))
    .catch((err) => console.log(err));                
};