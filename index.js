const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const id = require('./app/data/indonesia.json');

// Models

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Sync database
// simple route
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to Larq.' });
});
app.get('/api/id', (req, res) => {
  res.header('Content-Type', 'application/json');
  res.send(JSON.stringify(id));
});

// // Posts Routes

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
