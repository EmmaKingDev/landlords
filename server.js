'use strict';

const pg = require('pg');
const { Pool } = pg;

/* let secretManager = new AWS.SecretsManager({ region: 'us-east-1' });

 async function getSecret() {
  const data = await secretManager
    .getSecretValue({ SecretId: '' })
    .promise();
  let secret = JSON.parse(data.SecretString);
  return secret;
}
const secret = await getSecret();  */

  const pool = new Pool({
    user: '',
    host: '',
    database: '',
    password: '',
    port: 5432
  });
  
const getInventory = (request, response) => {
  pool.query('SELECT * FROM item', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getInventoryById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM item WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const updateInventory = (request, response) => {
  const id = parseInt(request.params.id);
  const saldo = '0';

  pool.query(
    'UPDATE users SET avail = $1 WHERE id = $2',
    [saldo, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Inventory updated with id: ${id}`);
    }
  );
};


/* export { getInventory, getInventoryById, updateInventory }; */
module.exports = { getInventory, getInventoryById, updateInventory };
