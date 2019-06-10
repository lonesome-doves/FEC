const express = require('express');
const bodyParser = require('body-parser');
const dbConnection = require('./../db/db.js');
const app = express();
const port = process.env.port || 3001;
const cors = require('cors');

// const defaultCorsHeaders = {
//   'access-control-allow-origin': '*',
//   'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'access-control-allow-headers': 'content-type, accept',
//   'access-control-max-age': 10,
//   'content-type': 'application/json'
// };

app.use(cors());
app.use(express.static(__dirname + './../dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/retrieve', (req, res) => {
  // res.set(defaultCorsHeaders);
  dbConnection.retrieve((data) => {
    res.send(data);
  })
})

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
