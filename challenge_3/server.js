const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/index.js');
const app = express();
const PORT = 3000;

// const publicDirectory;

app.use(express.static('public'));
// need to use body-parser as middleware
app.use(bodyParser.json());

app.get('/details', (req, res) => {
  var query = {name: req.query.name}
  console.log('req.query', req.query)
  db.User.find(query, (err, data) => {
    if (err) {
      console.log('get mongoose', err);
      res.status(404).send(err);
    } else {
      res.status(201).json(data[0]);
    }
  });
})

app.post('/details', (req, res) => {
   // use req.body
  var user = new db.User(req.body);
  user.save((err, data) => {
    if (err) {
      console.log('post mongoose', err);
      res.status(404).send(err);
    } else {
      console.log('post data', data);
      res.sendStatus(201);
    }
  })
})

app.put('/details', (req, res) => {
  var update = req.body;
  var query = {name: req.body.name};
  console.log('PutTT', update);
  db.User.findOneAndUpdate(query, update, (err, data) => {
    if (err) {
      console.log('put mongoose', err);
      res.status(404).send(err);
    } else {
      console.log('put data', data);
      res.sendStatus(201);
    }
  })
})

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})