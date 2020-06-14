const { Customer } = require('../models');

const createCustomer = (customerInfo) => {
  const customer = Customer.create(customerInfo)
    .then((customerData) => {
      console.log(customerData);
      return customerData;
    })
    .catch((err) => console.log(err));

  return customer; 
};

