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
  db.User.find({}, (err, data) => {
    if (err) {
      console.log('get mongoose', err);
      res.status(404).send(err);
    } else {
      res.status(201).json(data);
    }
  });
})

app.post('/details', (req, res) => {
   // use req.body
  console.log('sever post', req.body);
  console.log('post time', req.body)
  res.send('hi');
})

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})