const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(
  `Successfully connected to the server on port: ${port}`
));

