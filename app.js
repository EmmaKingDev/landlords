
const express = require('express');
const bodyParser = require('body-parser');
const { getInventory, getInventoryById, updateInventory } = require('./server.js');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', getInventory);
app.get('/:id', getInventoryById);
app.put('/:id', updateInventory);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app;